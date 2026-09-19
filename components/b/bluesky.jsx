import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsyi7db4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsyi7db4m"/>`,
		"fallback": "hugeicons:bluesky",
	});
}

export default Component;
