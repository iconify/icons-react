import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byvzk5lvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byvzk5lvm"/>`,
		"fallback": "ri:file-close-fill",
	});
}

export default Component;
