import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f35yy7v4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f35yy7v4w"/>`,
		"fallback": "thesvg-color:ghost",
	});
}

export default Component;
