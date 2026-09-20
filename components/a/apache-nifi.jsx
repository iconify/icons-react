import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdo4uxbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdo4uxbyh"/>`,
		"fallback": "thesvg-color:apache-nifi",
	});
}

export default Component;
