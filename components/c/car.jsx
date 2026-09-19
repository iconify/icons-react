import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4awfoyqw.css';
import '../../css/w/wn9rwz0-g.css';
import '../../css/f/fsgpfr68v.css';
import '../../css/j/janm05brh.css';
import '../../css/i/iad76iwuh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v4awfoyqw"/><path clip-rule="evenodd" class="wn9rwz0-g"/><path class="fsgpfr68v"/><rect class="janm05brh"/><rect transform="matrix(-1 0 0 1 59 41.371)" class="iad76iwuh"/></g>`,
		"fallback": "glyphs-poly:car",
	});
}

export default Component;
