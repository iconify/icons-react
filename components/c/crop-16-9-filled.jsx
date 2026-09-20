import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rns8vj0tv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rns8vj0tv"/>`,
		"fallback": "tabler:crop-16-9-filled",
	});
}

export default Component;
