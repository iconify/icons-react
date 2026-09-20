import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju9es9b_n.css';
import '../../css/y/ykp1m-x4i.css';
import '../../css/p/p3vpjjtxg.css';
import '../../css/h/huxd4ej0d.css';
import '../../css/x/x_-1pv9kw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju9es9b_n"/><path class="ykp1m-x4i"/><path class="p3vpjjtxg"/><path class="huxd4ej0d"/><path class="x_-1pv9kw"/>`,
		"fallback": "openmoji:green-apple",
	});
}

export default Component;
