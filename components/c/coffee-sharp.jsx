import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8735r-je.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8735r-je"/>`,
		"fallback": "keyline-icons:coffee-sharp",
	});
}

export default Component;
