import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hl6ks2bcm.css';
import '../../css/v/vyhwefgxb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hl6ks2bcm"/><path class="vyhwefgxb"/></g>`,
		"fallback": "glyphs:building-2",
	});
}

export default Component;
