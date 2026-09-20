import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxo5ibzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrxo5ibzv"/>`,
		"fallback": "simple-icons:bbciplayer",
	});
}

export default Component;
