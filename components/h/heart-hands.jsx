import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/ph05t8b0o.css';
import '../../css/a/a88zcbw0e.css';
import '../../css/p/pulgrgb5l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ph05t8b0o"/><path class="a88zcbw0e"/><path class="pulgrgb5l"/></g>`,
		"fallback": "glyphs:heart-hands",
	});
}

export default Component;
