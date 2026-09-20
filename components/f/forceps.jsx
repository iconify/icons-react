import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fizl9pbgx.css';
import '../../css/n/nq7w58mhy.css';
import '../../css/k/kh_i8p3mc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fizl9pbgx"/><path class="nq7w58mhy"/><path class="kh_i8p3mc"/>`,
		"fallback": "openmoji:forceps",
	});
}

export default Component;
