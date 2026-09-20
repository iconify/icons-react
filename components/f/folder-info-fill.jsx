import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjtor5_fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjtor5_fy"/>`,
		"fallback": "ri:folder-info-fill",
	});
}

export default Component;
