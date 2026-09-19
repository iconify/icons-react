import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khyez_07s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khyez_07s"/>`,
		"fallback": "akar-icons:full-screen",
	});
}

export default Component;
