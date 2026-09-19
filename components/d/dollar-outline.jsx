import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp-ng83yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp-ng83yt"/>`,
		"fallback": "flowbite:dollar-outline",
	});
}

export default Component;
