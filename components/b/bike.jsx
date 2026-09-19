import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/r5srqzbkt.css';
import '../../css/u/uqg4macxz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="r5srqzbkt"/><path class="uqg4macxz"/></g>`,
		"fallback": "glyphs-poly:bike",
	});
}

export default Component;
