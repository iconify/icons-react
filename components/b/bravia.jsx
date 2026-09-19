import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzkmd1-7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzkmd1-7x"/>`,
		"fallback": "cbi:bravia",
	});
}

export default Component;
