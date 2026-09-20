import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uen8fg65q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uen8fg65q"/>`,
		"fallback": "tdesign:chevron-right-circle-filled",
	});
}

export default Component;
