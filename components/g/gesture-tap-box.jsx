import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zazbjib5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zazbjib5p"/>`,
		"fallback": "mdi:gesture-tap-box",
	});
}

export default Component;
