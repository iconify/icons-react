import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyig9820h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyig9820h"/>`,
		"fallback": "selfhst:biltema-light",
	});
}

export default Component;
