import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vslkrlw2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vslkrlw2w"/>`,
		"fallback": "noviair-light:award-check",
	});
}

export default Component;
