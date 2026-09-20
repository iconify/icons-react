import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3bqpxbfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3bqpxbfd"/>`,
		"fallback": "mdi:chevron-right-circle",
	});
}

export default Component;
