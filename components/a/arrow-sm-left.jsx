import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilwl7-91o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilwl7-91o"/>`,
		"fallback": "heroicons-outline:arrow-sm-left",
	});
}

export default Component;
