import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgca40b7u.css';
import '../../css/n/n10l0kbuj.css';
import '../../css/u/u-3ipjkjd.css';
import '../../css/k/kdauzw8di.css';
import '../../css/s/sq4pxgboe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgca40b7u"/><path class="n10l0kbuj"/><path class="u-3ipjkjd"/><path class="kdauzw8di"/><path class="sq4pxgboe"/>`,
		"fallback": "energy-icons:helicopter-20",
	});
}

export default Component;
