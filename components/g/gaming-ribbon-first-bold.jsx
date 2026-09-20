import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz2jnab2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mz2jnab2n"/>`,
		"fallback": "streamline-ultimate:gaming-ribbon-first-bold",
	});
}

export default Component;
