import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4wfglb7q.css';
import '../../css/t/t0ef70sfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="c4wfglb7q"/><path class="t0ef70sfj"/></g>`,
		"fallback": "hugeicons:file-clock",
	});
}

export default Component;
