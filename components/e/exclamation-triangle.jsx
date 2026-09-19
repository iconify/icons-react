import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/byvntmo1o.css';
import '../../css/m/mim48l7lv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="byvntmo1o"/><path class="mim48l7lv"/></g>`,
		"fallback": "glyphs-poly:exclamation-triangle",
	});
}

export default Component;
