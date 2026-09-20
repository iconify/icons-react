import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gmykgvbtb.css';
import '../../css/e/epki6lbul.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gmykgvbtb"/><path class="epki6lbul"/></g>`,
		"fallback": "streamline:chess-pawn",
	});
}

export default Component;
