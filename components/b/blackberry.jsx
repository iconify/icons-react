import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu4h1fb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu4h1fb1x"/>`,
		"fallback": "thesvg-color:blackberry",
	});
}

export default Component;
