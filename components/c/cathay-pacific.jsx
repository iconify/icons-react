import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrwqzibld.css';

const viewBox = {"width":26.458,"height":3.704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrwqzibld"/>`,
		"fallback": "thesvg-color:cathay-pacific",
	});
}

export default Component;
