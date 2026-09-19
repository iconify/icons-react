import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff6usbbft.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff6usbbft"/>`,
		"fallback": "f7:creditcard-fill",
	});
}

export default Component;
