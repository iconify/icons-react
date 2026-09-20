import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc-3-bc9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gc-3-bc9o"/>`,
		"fallback": "solar:bolt-circle-bold",
	});
}

export default Component;
