import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/ghxlp_b_p.css';
import '../../css/j/jvj2kub-u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ghxlp_b_p"/><path class="jvj2kub-u"/></g>`,
		"fallback": "glyphs:cloudy-partly",
	});
}

export default Component;
