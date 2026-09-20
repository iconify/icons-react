import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow_z9l4da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow_z9l4da"/>`,
		"fallback": "ri:folder-reduce-fill",
	});
}

export default Component;
