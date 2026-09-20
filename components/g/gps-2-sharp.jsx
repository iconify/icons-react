import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s35955b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s35955b4r"/>`,
		"fallback": "pixelarticons:gps-2-sharp",
	});
}

export default Component;
