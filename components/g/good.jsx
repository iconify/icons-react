import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2w8nrbvp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2w8nrbvp"/>`,
		"fallback": "icon-park-outline:good",
	});
}

export default Component;
