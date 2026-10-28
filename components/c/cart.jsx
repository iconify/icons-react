import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/u/uk5nk-big.css';
import '../../css/f/fdgjnrd3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="uk5nk-big"/><path class="fdgjnrd3a"/></g>`,
		"fallback": "codex:cart",
	});
}

export default Component;
