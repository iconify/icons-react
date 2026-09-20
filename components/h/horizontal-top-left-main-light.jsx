import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecbe8r41d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecbe8r41d"/>`,
		"fallback": "lets-icons:horizontal-top-left-main-light",
	});
}

export default Component;
