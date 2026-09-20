import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbgk3dx_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbgk3dx_l"/>`,
		"fallback": "uil:calculator",
	});
}

export default Component;
