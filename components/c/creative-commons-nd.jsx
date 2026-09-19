import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uucn2tb8x.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uucn2tb8x"/>`,
		"fallback": "fa6-brands:creative-commons-nd",
	});
}

export default Component;
