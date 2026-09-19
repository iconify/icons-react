import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pedgsybcp.css';
import '../../css/f/f8-pkcc1c.css';
import '../../css/e/en8bqbcrl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pedgsybcp"/><path class="f8-pkcc1c"/><path class="en8bqbcrl"/></g>`,
		"fallback": "glyphs-poly:flip",
	});
}

export default Component;
