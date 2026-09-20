import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3zypgb3l.css';

const viewBox = {"width":33,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m3zypgb3l"/>`,
		"fallback": "thesvg-color:docus-dark",
	});
}

export default Component;
