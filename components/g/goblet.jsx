import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du3ndgb0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du3ndgb0m"/>`,
		"fallback": "icon-park-outline:goblet",
	});
}

export default Component;
