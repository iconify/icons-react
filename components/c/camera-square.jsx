import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw82_714f.css';
import '../../css/y/ysy1t6bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer tw82_714f"/><path class="duoicon-primary-layer ysy1t6bhs"/>`,
		"fallback": "duo-icons:camera-square",
	});
}

export default Component;
