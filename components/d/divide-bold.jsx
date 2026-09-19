import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a__s2g6zp.css';
import '../../css/l/ln7cyvcfw.css';
import '../../css/z/z2xr0pb1c.css';
import '../../css/w/wpmk60uqr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a__s2g6zp"><path class="ln7cyvcfw"/><rect class="z2xr0pb1c"/><rect class="wpmk60uqr"/></g>`,
		"fallback": "glyphs:divide-bold",
	});
}

export default Component;
