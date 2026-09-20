import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doijq24oo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="doijq24oo"/>`,
		"fallback": "lets-icons:folder-del-light",
	});
}

export default Component;
