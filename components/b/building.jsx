import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxc6ubbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxc6ubbag"/>`,
		"fallback": "pixelarticons:building",
	});
}

export default Component;
