import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6kbb7brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6kbb7brl"/>`,
		"fallback": "noviair-light:ban",
	});
}

export default Component;
