import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwq7_02iq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwq7_02iq"/>`,
		"fallback": "subway:document",
	});
}

export default Component;
