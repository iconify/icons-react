import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae1bp_7og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ae1bp_7og"/>`,
		"fallback": "streamline-logos:feathub-logo-solid",
	});
}

export default Component;
