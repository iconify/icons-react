import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbehteb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbehteb3i"/>`,
		"fallback": "streamline-logos:app-store-logo",
	});
}

export default Component;
