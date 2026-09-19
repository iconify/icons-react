import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vciwspb7i.css';
import '../../css/i/ij7ttcyqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vciwspb7i"/><path class="ij7ttcyqm"/></g>`,
		"fallback": "hugeicons:copy-link",
	});
}

export default Component;
