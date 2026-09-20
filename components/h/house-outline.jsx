import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtd-oqb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dtd-oqb4p"/>`,
		"fallback": "solar:house-outline",
	});
}

export default Component;
