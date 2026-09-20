import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es4zrthkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es4zrthkl"/>`,
		"fallback": "reicon:chair3",
	});
}

export default Component;
