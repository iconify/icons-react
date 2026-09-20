import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvantbcbw.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/e/ec3ftbzyw.css';
import '../../css/t/tj2_w8ydf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvantbcbw"/><g class="kdz4acc8r"><path class="ec3ftbzyw"/><path class="tj2_w8ydf"/></g>`,
		"fallback": "openmoji:busts-in-silhouette",
	});
}

export default Component;
