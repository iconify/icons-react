import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0caa8b5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t0caa8b5k"/>`,
		"fallback": "streamline:file-delete-alternate-remix",
	});
}

export default Component;
