import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k2k6wrbli.css';
import '../../css/u/uk4liwe1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k2k6wrbli"/><path class="uk4liwe1r wm-a"/></g>`,
		"fallback": "withicons:contactless",
	});
}

export default Component;
