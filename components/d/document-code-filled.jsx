import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omhq2obvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omhq2obvn"/>`,
		"fallback": "reicon:document-code-filled",
	});
}

export default Component;
