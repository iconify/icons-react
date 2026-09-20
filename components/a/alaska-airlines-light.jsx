import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtw1qacud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtw1qacud"/>`,
		"fallback": "selfhst:alaska-airlines-light",
	});
}

export default Component;
