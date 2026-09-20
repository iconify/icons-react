import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq9przbhr.css';

const viewBox = {"width":24,"height":24,"left":-8.5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq9przbhr"/>`,
		"fallback": "jam:bold",
	});
}

export default Component;
