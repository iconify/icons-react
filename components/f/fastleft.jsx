import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wffg6bc4t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wffg6bc4t"/>`,
		"fallback": "whh:fastleft",
	});
}

export default Component;
