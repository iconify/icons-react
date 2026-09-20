import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8zsfrlau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8zsfrlau"/>`,
		"fallback": "keyline-icons:circle-slash-sharp-fill",
	});
}

export default Component;
