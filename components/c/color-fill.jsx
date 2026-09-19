import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lslaa6b4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lslaa6b4l"/>`,
		"fallback": "bx:color-fill",
	});
}

export default Component;
