import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sd7mvf3uv.css';
import '../../css/f/fpvegqb7e.css';
import '../../css/b/b3ts8cn7g.css';
import '../../css/c/cpbdakb7g.css';
import '../../css/d/dqlpkacjm.css';
import '../../css/c/czq_98r8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sd7mvf3uv wm-shadow"/><path class="fpvegqb7e wm-shadow"/><path class="b3ts8cn7g"/><path class="cpbdakb7g"/><path class="dqlpkacjm"/><path class="czq_98r8d wm-s"/></g>`,
		"fallback": "withicons-brutal:church",
	});
}

export default Component;
