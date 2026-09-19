import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aggw3hbin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aggw3hbin"/>`,
		"fallback": "icon-park-solid:horizontal-tidy-up",
	});
}

export default Component;
