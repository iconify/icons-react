import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww65r8r8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww65r8r8b"/>`,
		"fallback": "boxicons:image-circle-filled",
	});
}

export default Component;
