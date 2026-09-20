import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anjdf9b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anjdf9b7m"/>`,
		"fallback": "pixelarticons:frame-delete",
	});
}

export default Component;
