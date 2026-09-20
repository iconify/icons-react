import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir1gv_2ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir1gv_2ki"/>`,
		"fallback": "pixelarticons:bluesky",
	});
}

export default Component;
