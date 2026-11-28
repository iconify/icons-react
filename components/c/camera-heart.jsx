import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytfd0j2fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytfd0j2fs"/>`,
		"fallback": "noviair:camera-heart",
	});
}

export default Component;
