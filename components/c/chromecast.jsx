import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgnvfiyhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgnvfiyhr"/>`,
		"fallback": "fa-brands:chromecast",
	});
}

export default Component;
