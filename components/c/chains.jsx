import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hniqf4uct.css';
import '../../css/s/s6j6w1llc.css';
import '../../css/g/gfwetbbaf.css';
import '../../css/l/lciwvybuu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/oqdrd-bed.css';
import '../../css/e/eox5lmzxr.css';
import '../../css/r/riva4lbsu.css';
import '../../css/e/eutolz4tf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="hniqf4uct"/><ellipse class="s6j6w1llc"/><ellipse class="gfwetbbaf"/><path class="lciwvybuu"/><g class="jn8qy4bru"><path class="oqdrd-bed"/><path class="eox5lmzxr"/><path class="riva4lbsu"/><path class="eutolz4tf"/></g>`,
		"fallback": "openmoji:chains",
	});
}

export default Component;
