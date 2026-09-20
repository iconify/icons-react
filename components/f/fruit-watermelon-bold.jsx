import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiyx6zbdr.css';
import '../../css/c/c03wv0hyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiyx6zbdr"/><path class="c03wv0hyi"/>`,
		"fallback": "streamline-ultimate:fruit-watermelon-bold",
	});
}

export default Component;
