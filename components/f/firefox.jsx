import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am0pdubzm.css';

const viewBox = {"width":1792,"height":1760};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am0pdubzm"/>`,
		"fallback": "fa:firefox",
	});
}

export default Component;
