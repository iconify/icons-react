import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td6n-mrnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td6n-mrnk"/>`,
		"fallback": "mdi-light:check-circle",
	});
}

export default Component;
