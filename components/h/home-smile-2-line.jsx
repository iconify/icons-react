import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znlfkob_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znlfkob_m"/>`,
		"fallback": "ri:home-smile-2-line",
	});
}

export default Component;
