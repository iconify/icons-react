import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgg6crb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgg6crb7j"/>`,
		"fallback": "ri:firefox-browser-fill",
	});
}

export default Component;
