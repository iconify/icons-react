import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/t1edgcb6p.css';
import '../../css/l/lw2u413yi.css';
import '../../css/d/ds3o1_brx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="t1edgcb6p"/><path class="lw2u413yi"/><path class="ds3o1_brx"/></g>`,
		"fallback": "glyphs:album",
	});
}

export default Component;
