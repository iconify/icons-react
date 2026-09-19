import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mfzmsjb1g.css';
import '../../css/e/ex1h1vkaf.css';
import '../../css/r/r_ijk8j7z.css';
import '../../css/q/qi1crib2m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mfzmsjb1g"/><path class="ex1h1vkaf"/><path class="r_ijk8j7z"/><path class="qi1crib2m"/></g>`,
		"fallback": "glyphs:arrows-expand-duo-bold",
	});
}

export default Component;
