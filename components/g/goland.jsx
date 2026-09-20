import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unzp673gi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unzp673gi"/>`,
		"fallback": "thesvg-color:goland",
	});
}

export default Component;
