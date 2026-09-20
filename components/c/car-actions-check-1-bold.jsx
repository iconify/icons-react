import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x21i0yv0u.css';
import '../../css/h/hcnco5bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x21i0yv0u"/><path class="hcnco5bma"/>`,
		"fallback": "streamline-ultimate:car-actions-check-1-bold",
	});
}

export default Component;
