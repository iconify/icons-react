import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn1i5feok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xn1i5feok"/>`,
		"fallback": "reicon:bill-list-filled",
	});
}

export default Component;
