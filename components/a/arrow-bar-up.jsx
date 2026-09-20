import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgy4qqb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgy4qqb9n"/>`,
		"fallback": "tabler:arrow-bar-up",
	});
}

export default Component;
