import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8nzdvemh.css';
import '../../css/n/ndshnjb5c.css';
import '../../css/q/q3qds9b_l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h8nzdvemh"><path class="ndshnjb5c"/><path class="q3qds9b_l"/></g>`,
		"fallback": "glyphs-poly:hexagon",
	});
}

export default Component;
