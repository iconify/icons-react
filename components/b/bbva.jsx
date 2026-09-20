import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krxl8tomz.css';

const viewBox = {"width":3543.2,"height":1059.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krxl8tomz"/>`,
		"fallback": "thesvg-color:bbva",
	});
}

export default Component;
