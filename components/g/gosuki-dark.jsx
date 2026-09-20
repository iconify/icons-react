import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bodxe5byv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bodxe5byv"/>`,
		"fallback": "selfhst:gosuki-dark",
	});
}

export default Component;
