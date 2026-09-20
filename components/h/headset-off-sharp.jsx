import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygz1y6bnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygz1y6bnz"/>`,
		"fallback": "keyline-icons:headset-off-sharp",
	});
}

export default Component;
