import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oamm76ujh.css';
import '../../css/i/i72iigb4y.css';
import '../../css/z/zfyv2h51a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oamm76ujh"/><path class="i72iigb4y"/><path class="zfyv2h51a"/>`,
		"fallback": "bx:bxl-tux",
	});
}

export default Component;
