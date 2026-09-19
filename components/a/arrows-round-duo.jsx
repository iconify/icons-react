import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iyliswbof.css';
import '../../css/i/irc1t7b8q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iyliswbof"/><path class="irc1t7b8q"/></g>`,
		"fallback": "glyphs:arrows-round-duo",
	});
}

export default Component;
