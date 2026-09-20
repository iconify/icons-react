import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2mru8bce.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2mru8bce"/>`,
		"fallback": "streamline:file-delete-alternate",
	});
}

export default Component;
