import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/si1cdrbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="si1cdrbhn"/>`,
		"fallback": "mingcute:aerial-lift-fill",
	});
}

export default Component;
