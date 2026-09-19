import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hidupynyl.css';
import '../../css/f/fnd2alblp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="hidupynyl"/><path class="fnd2alblp"/></g>`,
		"fallback": "glyphs-poly:align-side",
	});
}

export default Component;
