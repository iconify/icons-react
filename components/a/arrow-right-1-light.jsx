import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoihlxb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoihlxb3o"/>`,
		"fallback": "iconamoon:arrow-right-1-light",
	});
}

export default Component;
