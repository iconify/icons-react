import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdzqpv1gd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wdzqpv1gd"/>`,
		"fallback": "reicon:bill-check-filled",
	});
}

export default Component;
