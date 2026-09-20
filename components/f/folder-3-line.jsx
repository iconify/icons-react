import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpmyxrb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpmyxrb0m"/>`,
		"fallback": "ri:folder-3-line",
	});
}

export default Component;
