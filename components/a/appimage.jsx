import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce5ccgb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce5ccgb3d"/>`,
		"fallback": "simple-icons:appimage",
	});
}

export default Component;
