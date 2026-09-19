import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wem_b1dpz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wem_b1dpz"/>`,
		"fallback": "garden:facebook-stroke-12",
	});
}

export default Component;
