import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/issb3rb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="issb3rb6n"/>`,
		"fallback": "noviair-light:graduation-cap-star",
	});
}

export default Component;
