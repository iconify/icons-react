import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ain8fqvmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ain8fqvmn"/>`,
		"fallback": "mingcute:gallery-thumbnails-line",
	});
}

export default Component;
