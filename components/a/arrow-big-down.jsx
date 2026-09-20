import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvs-21bhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvs-21bhb"/>`,
		"fallback": "pixelarticons:arrow-big-down",
	});
}

export default Component;
