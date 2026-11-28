import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkacrgb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkacrgb6z"/>`,
		"fallback": "iconaut:clothes-button-solid",
	});
}

export default Component;
