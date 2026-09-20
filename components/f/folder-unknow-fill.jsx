import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0lv3ob6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0lv3ob6y"/>`,
		"fallback": "ri:folder-unknow-fill",
	});
}

export default Component;
