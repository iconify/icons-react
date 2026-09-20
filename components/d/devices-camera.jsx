import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzfoa0vtr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vzfoa0vtr"/>`,
		"fallback": "streamline-block:devices-camera",
	});
}

export default Component;
