import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg-sms8br.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg-sms8br"/>`,
		"fallback": "pinhead:coffee-mug-and-wifi",
	});
}

export default Component;
