import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gikm-gb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gikm-gb_x"/>`,
		"fallback": "keyline-icons:credit-card",
	});
}

export default Component;
