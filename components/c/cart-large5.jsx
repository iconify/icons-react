import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf-01p6qu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rf-01p6qu"/>`,
		"fallback": "reicon:cart-large5",
	});
}

export default Component;
