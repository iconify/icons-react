import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moj52yb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moj52yb5z"/>`,
		"fallback": "thesvg-color:ars-technica",
	});
}

export default Component;
