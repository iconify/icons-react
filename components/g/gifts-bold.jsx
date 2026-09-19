import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i174wac8g.css';
import '../../css/q/qzjjwq58s.css';
import '../../css/x/x0y4czihj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i174wac8g"/><path class="qzjjwq58s"/><path class="x0y4czihj"/></g>`,
		"fallback": "glyphs:gifts-bold",
	});
}

export default Component;
