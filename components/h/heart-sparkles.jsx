import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mipampm5e.css';
import '../../css/b/bcsqw5n-n.css';
import '../../css/s/s5lscfbct.css';
import '../../css/s/s0gt0yp1q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mipampm5e"/><path class="bcsqw5n-n"/><path class="s5lscfbct"/><path class="s0gt0yp1q"/></g>`,
		"fallback": "glyphs:heart-sparkles",
	});
}

export default Component;
