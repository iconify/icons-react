import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np854gbbn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np854gbbn"/>`,
		"fallback": "subway:crop",
	});
}

export default Component;
