import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8xe44b8o.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-3.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8xe44b8o"/>`,
		"fallback": "jam:brightness-down-f",
	});
}

export default Component;
