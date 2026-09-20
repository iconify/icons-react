import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt01scb7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xt01scb7i"/>`,
		"fallback": "ix:email-document-filled",
	});
}

export default Component;
