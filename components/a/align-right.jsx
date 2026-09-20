import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frp_2fbhn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frp_2fbhn"/>`,
		"fallback": "radix-icons:align-right",
	});
}

export default Component;
