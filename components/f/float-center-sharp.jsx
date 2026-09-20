import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li1x4xo6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li1x4xo6r"/>`,
		"fallback": "pixelarticons:float-center-sharp",
	});
}

export default Component;
