import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o94mocbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o94mocbwl"/>`,
		"fallback": "thesvg-color:hungry-jack-s",
	});
}

export default Component;
