import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjawm7bzz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjawm7bzz"/>`,
		"fallback": "selfhst:frappe-insights-dark",
	});
}

export default Component;
