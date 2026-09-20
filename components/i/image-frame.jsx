import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_qhp0b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_qhp0b3a"/>`,
		"fallback": "pixelarticons:image-frame",
	});
}

export default Component;
