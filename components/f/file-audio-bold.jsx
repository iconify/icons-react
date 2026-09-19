import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvlvhpb4k.css';
import '../../css/h/hygm70ygz.css';
import '../../css/j/jxl7ousbe.css';
import '../../css/g/gb1t6vkyv.css';
import '../../css/e/e3k02oyaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cvlvhpb4k"><path class="hygm70ygz"/><path class="jxl7ousbe"/><circle class="gb1t6vkyv"/><path class="e3k02oyaf"/></g>`,
		"fallback": "iconamoon:file-audio-bold",
	});
}

export default Component;
