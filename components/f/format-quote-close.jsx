import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em5g3mbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em5g3mbdi"/>`,
		"fallback": "mdi:format-quote-close",
	});
}

export default Component;
