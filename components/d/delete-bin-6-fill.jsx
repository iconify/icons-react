import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e882zy72m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e882zy72m"/>`,
		"fallback": "ri:delete-bin-6-fill",
	});
}

export default Component;
