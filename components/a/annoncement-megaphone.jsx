import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z-k_3lrhl.css';
import '../../css/w/w5sj3gbws.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="z-k_3lrhl"/><path class="w5sj3gbws"/></g>`,
		"fallback": "streamline:annoncement-megaphone",
	});
}

export default Component;
