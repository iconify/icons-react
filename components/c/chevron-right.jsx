import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgo5kz4zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgo5kz4zx"/>`,
		"fallback": "withicons:chevron-right",
	});
}

export default Component;
