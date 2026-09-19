import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtww1vtox.css';
import '../../css/g/gi50h7bfm.css';
import '../../css/t/t5ceytyal.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gtww1vtox"/><path class="gi50h7bfm"/><path class="t5ceytyal"/></g>`,
		"fallback": "glyphs:clock-duo",
	});
}

export default Component;
