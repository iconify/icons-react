import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6ufgcbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6ufgcbtc"/>`,
		"fallback": "si:heart-alt-fill",
	});
}

export default Component;
