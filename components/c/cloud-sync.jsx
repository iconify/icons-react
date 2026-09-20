import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1kw9kk6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1kw9kk6d"/>`,
		"fallback": "mdi:cloud-sync",
	});
}

export default Component;
