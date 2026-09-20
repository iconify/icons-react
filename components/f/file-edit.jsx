import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqr8lfj3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqr8lfj3l"/>`,
		"fallback": "mdi:file-edit",
	});
}

export default Component;
