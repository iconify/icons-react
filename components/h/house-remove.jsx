import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgcuh9bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgcuh9bxd"/>`,
		"fallback": "mdi:house-remove",
	});
}

export default Component;
