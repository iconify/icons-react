import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dc2wgbcoh.css';
import '../../css/d/dwf9vmmel.css';
import '../../css/o/our-m0bsu.css';
import '../../css/x/xy3osn-xf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dc2wgbcoh"/><path class="dwf9vmmel"/><path class="our-m0bsu"/><path class="xy3osn-xf"/></g>`,
		"fallback": "glyphs:coin-outline",
	});
}

export default Component;
