import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nktvqrvpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nktvqrvpj"/>`,
		"fallback": "griddy-icons:beaker-empty",
	});
}

export default Component;
