import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xq4i7fvzd.css';
import '../../css/q/q24g43u1c.css';
import '../../css/f/ficclfbro.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xq4i7fvzd"/><path class="q24g43u1c"/><path class="ficclfbro"/></g>`,
		"fallback": "glyphs:house-fire",
	});
}

export default Component;
