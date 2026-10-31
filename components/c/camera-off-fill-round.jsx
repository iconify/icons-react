import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz3c6b5lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz3c6b5lt"/>`,
		"fallback": "coolicons:camera-off-fill-round",
	});
}

export default Component;
