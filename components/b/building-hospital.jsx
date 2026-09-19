import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cvaqi2bvd.css';
import '../../css/p/pgr-xub5d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cvaqi2bvd"/><path class="pgr-xub5d"/></g>`,
		"fallback": "glyphs:building-hospital",
	});
}

export default Component;
