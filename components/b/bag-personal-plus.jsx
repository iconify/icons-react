import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slom_xddu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slom_xddu"/>`,
		"fallback": "mdi:bag-personal-plus",
	});
}

export default Component;
