import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb9sfrenb.css';

const viewBox = {"width":91,"height":43};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb9sfrenb"/>`,
		"fallback": "thesvg-color:infisical-light",
	});
}

export default Component;
