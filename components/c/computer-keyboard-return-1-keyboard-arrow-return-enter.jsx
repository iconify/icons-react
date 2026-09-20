import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ug2z_5eve.css';
import '../../css/x/xc4tbtbbw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ug2z_5eve"/><path class="xc4tbtbbw"/></g>`,
		"fallback": "streamline:computer-keyboard-return-1-keyboard-arrow-return-enter",
	});
}

export default Component;
