import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns9w8983n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns9w8983n"/>`,
		"fallback": "ix:chevron-up",
	});
}

export default Component;
