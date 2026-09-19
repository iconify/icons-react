import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2u1amfii.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2u1amfii"/>`,
		"fallback": "icon-park-solid:filter",
	});
}

export default Component;
