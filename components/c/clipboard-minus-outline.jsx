import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4_frbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd4_frbvc"/>`,
		"fallback": "mdi:clipboard-minus-outline",
	});
}

export default Component;
