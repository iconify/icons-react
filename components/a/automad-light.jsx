import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8mqh6b_b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8mqh6b_b"/>`,
		"fallback": "selfhst:automad-light",
	});
}

export default Component;
