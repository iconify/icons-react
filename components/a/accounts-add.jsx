import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uglkwz-2l.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uglkwz-2l"/>`,
		"fallback": "zmdi:accounts-add",
	});
}

export default Component;
