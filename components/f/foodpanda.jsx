import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps1-t3blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps1-t3blf"/>`,
		"fallback": "simple-icons:foodpanda",
	});
}

export default Component;
