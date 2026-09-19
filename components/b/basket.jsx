import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g6-yw9fpp.css';
import '../../css/f/f0-5odbhv.css';
import '../../css/p/prkny4bho.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="g6-yw9fpp"/><path class="f0-5odbhv"/><path class="prkny4bho"/></g>`,
		"fallback": "glyphs-poly:basket",
	});
}

export default Component;
