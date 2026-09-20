import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/el4erqviu.css';
import '../../css/r/rss65c00p.css';
import '../../css/m/mtgv5fb7s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="el4erqviu"/><path class="rss65c00p"/><path class="mtgv5fb7s"/></g>`,
		"fallback": "streamline-color:graph-bar-decrease",
	});
}

export default Component;
