import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ang--ib1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ang--ib1x"/>`,
		"fallback": "lets-icons:ice-cream",
	});
}

export default Component;
