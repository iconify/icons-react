import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxw1kfb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxw1kfb9o"/>`,
		"fallback": "pixelarticons:gitlab-solid",
	});
}

export default Component;
