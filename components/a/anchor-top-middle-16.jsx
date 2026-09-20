import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5ydwh_7g.css';
import '../../css/m/mgkytmtsq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5ydwh_7g"/><path class="mgkytmtsq"/>`,
		"fallback": "qlementine-icons:anchor-top-middle-16",
	});
}

export default Component;
