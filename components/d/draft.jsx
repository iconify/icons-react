import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y64d-bcld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y64d-bcld"/>`,
		"fallback": "mdi:draft",
	});
}

export default Component;
