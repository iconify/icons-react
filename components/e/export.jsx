import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru_up_-lr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru_up_-lr"/>`,
		"fallback": "icon-park-outline:export",
	});
}

export default Component;
