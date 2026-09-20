import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmd2d0b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmd2d0b1r"/>`,
		"fallback": "keyline-icons:brain",
	});
}

export default Component;
