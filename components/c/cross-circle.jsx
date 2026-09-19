import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvf2knbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvf2knbfe"/>`,
		"fallback": "boxicons:cross-circle",
	});
}

export default Component;
