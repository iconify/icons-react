import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axj-rzbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axj-rzbtz"/>`,
		"fallback": "mdi:file-remove",
	});
}

export default Component;
