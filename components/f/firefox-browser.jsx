import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgy6b1-ya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgy6b1-ya"/>`,
		"fallback": "fa-brands:firefox-browser",
	});
}

export default Component;
