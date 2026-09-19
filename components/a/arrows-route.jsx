import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wmg8avpvd.css';
import '../../css/h/he6ut4p2j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wmg8avpvd"/><path class="he6ut4p2j"/></g>`,
		"fallback": "glyphs:arrows-route",
	});
}

export default Component;
