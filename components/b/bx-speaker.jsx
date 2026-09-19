import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv1w6dbgf.css';
import '../../css/y/yglam5kqs.css';
import '../../css/v/vqeh6flxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv1w6dbgf"/><path class="yglam5kqs"/><circle class="vqeh6flxd"/>`,
		"fallback": "bx:bx-speaker",
	});
}

export default Component;
