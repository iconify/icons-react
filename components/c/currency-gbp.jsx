import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgff4ownd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgff4ownd"/>`,
		"fallback": "mdi-light:currency-gbp",
	});
}

export default Component;
