import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad72w3bax.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad72w3bax"/>`,
		"fallback": "jam:envelope-f",
	});
}

export default Component;
