import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qh-4wbsxz.css';
import '../../css/g/gv1ls1b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qh-4wbsxz"/><path class="gv1ls1b7c"/></g>`,
		"fallback": "hugeicons:file-pound",
	});
}

export default Component;
