import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7gsv6u-b.css';

const viewBox = {"width":93,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u7gsv6u-b"/>`,
		"fallback": "thesvg-color:beacon",
	});
}

export default Component;
