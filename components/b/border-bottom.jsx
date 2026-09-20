import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f40vwcb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f40vwcb5t"/>`,
		"fallback": "mdi-light:border-bottom",
	});
}

export default Component;
