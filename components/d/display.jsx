import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udehd1bxt.css';
import '../../css/y/yancwabok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udehd1bxt"/><path class="yancwabok"/>`,
		"fallback": "flat-color-icons:display",
	});
}

export default Component;
