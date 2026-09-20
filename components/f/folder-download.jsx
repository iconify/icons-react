import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw1cj-brk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw1cj-brk"/>`,
		"fallback": "mdi:folder-download",
	});
}

export default Component;
