import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akoau_biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akoau_biy"/>`,
		"fallback": "griddy-icons:fiverr-filled",
	});
}

export default Component;
