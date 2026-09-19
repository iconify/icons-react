import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wmmnt9jkb.css';
import '../../css/b/b2fitjben.css';
import '../../css/i/i38s-hq5f.css';
import '../../css/n/nqxug22ic.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wmmnt9jkb"/><path class="b2fitjben"/><path clip-rule="evenodd" class="i38s-hq5f"/><path class="nqxug22ic"/></g>`,
		"fallback": "glyphs-poly:apple",
	});
}

export default Component;
