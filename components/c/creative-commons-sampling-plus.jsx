import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjtk3-bur.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjtk3-bur"/>`,
		"fallback": "fa-brands:creative-commons-sampling-plus",
	});
}

export default Component;
