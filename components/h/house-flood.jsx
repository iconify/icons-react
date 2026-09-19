import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ubyftdn1r.css';
import '../../css/f/fr7u0ubhf.css';
import '../../css/d/d6woa2e3g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ubyftdn1r"/><path class="fr7u0ubhf"/><path class="d6woa2e3g"/></g>`,
		"fallback": "glyphs:house-flood",
	});
}

export default Component;
