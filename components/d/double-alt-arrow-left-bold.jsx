import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl4bbtw5c.css';
import '../../css/y/ynwkrvbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nl4bbtw5c"/><path class="ynwkrvbew"/>`,
		"fallback": "solar:double-alt-arrow-left-bold",
	});
}

export default Component;
