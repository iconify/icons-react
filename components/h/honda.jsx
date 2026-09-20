import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yje1y7w0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yje1y7w0a"/>`,
		"fallback": "thesvg-color:honda",
	});
}

export default Component;
