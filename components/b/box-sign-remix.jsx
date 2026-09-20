import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/korl6q5lr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="korl6q5lr"/>`,
		"fallback": "streamline:box-sign-remix",
	});
}

export default Component;
