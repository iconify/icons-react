import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1k692o9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1k692o9o"/>`,
		"fallback": "selfhst:at-t-light",
	});
}

export default Component;
