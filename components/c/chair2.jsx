import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbd70xz5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nbd70xz5c"/>`,
		"fallback": "reicon:chair2",
	});
}

export default Component;
