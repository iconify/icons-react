import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4624zgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti4624zgz"/>`,
		"fallback": "noviair-light:file-video-x",
	});
}

export default Component;
