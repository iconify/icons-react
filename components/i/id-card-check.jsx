import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiqj8cb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiqj8cb7r"/>`,
		"fallback": "noviair-light:id-card-check",
	});
}

export default Component;
