import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt8n-9b6u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt8n-9b6u"/>`,
		"fallback": "memory:border-top-left-right",
	});
}

export default Component;
