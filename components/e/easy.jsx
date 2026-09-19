import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8d_9eptl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8d_9eptl"/>`,
		"fallback": "icon-park:easy",
	});
}

export default Component;
