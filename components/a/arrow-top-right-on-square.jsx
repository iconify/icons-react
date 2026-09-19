import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn1pczm7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn1pczm7n"/>`,
		"fallback": "heroicons-outline:arrow-top-right-on-square",
	});
}

export default Component;
