import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx1---vpn.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx1---vpn"/>`,
		"fallback": "jam:cutlery-f",
	});
}

export default Component;
