import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlqhq9n4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlqhq9n4p"/>`,
		"fallback": "heroicons-outline:clipboard-copy",
	});
}

export default Component;
