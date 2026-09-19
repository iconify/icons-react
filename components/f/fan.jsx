import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x62avfvkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x62avfvkm"/>`,
		"fallback": "icon-park-outline:fan",
	});
}

export default Component;
