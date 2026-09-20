import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etpj0ljio.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etpj0ljio"/>`,
		"fallback": "simple-line-icons:credit-card",
	});
}

export default Component;
