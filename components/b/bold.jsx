import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnxjfyb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnxjfyb6a"/>`,
		"fallback": "pixel:bold",
	});
}

export default Component;
