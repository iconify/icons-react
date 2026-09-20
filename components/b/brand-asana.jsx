import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khf3n-v7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khf3n-v7c"/>`,
		"fallback": "tabler:brand-asana",
	});
}

export default Component;
