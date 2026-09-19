import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vmnknnmuy.css';
import '../../css/p/pg98zb21c.css';
import '../../css/i/imszhdckf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vmnknnmuy"/><path class="pg98zb21c"/><path class="imszhdckf"/></g>`,
		"fallback": "glyphs:bells-bold",
	});
}

export default Component;
