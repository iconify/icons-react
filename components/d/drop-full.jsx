import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kez--3b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kez--3b3r"/>`,
		"fallback": "pixelarticons:drop-full",
	});
}

export default Component;
