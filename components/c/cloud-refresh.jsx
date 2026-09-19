import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l45hi9gsd.css';

const viewBox = {"width":27,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l45hi9gsd"/>`,
		"fallback": "fontisto:cloud-refresh",
	});
}

export default Component;
