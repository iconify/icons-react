import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2lnp2nzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2lnp2nzb"/>`,
		"fallback": "noviair-light:calculator-check",
	});
}

export default Component;
