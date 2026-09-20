import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao2txpbin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao2txpbin"/>`,
		"fallback": "mdi:cross-outline",
	});
}

export default Component;
