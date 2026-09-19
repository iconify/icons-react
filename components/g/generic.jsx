import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c41awf-_v.css';
import '../../css/g/g5ls9fbxi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="c41awf-_v"/><path class="g5ls9fbxi"/></g>`,
		"fallback": "cryptocurrency-color:generic",
	});
}

export default Component;
