import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dco2sibti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dco2sibti"/>`,
		"fallback": "noviair-light:fuel-check",
	});
}

export default Component;
