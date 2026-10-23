import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbaqi5b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbaqi5b8z"/>`,
		"fallback": "wordpress:database",
	});
}

export default Component;
