import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/auosc1aua.css';
import '../../css/c/cyngngz8q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="auosc1aua"/><path class="cyngngz8q"/></g>`,
		"fallback": "glyphs:heart-half-2",
	});
}

export default Component;
