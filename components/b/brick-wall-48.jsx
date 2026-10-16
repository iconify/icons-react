import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkr2umbbc.css';
import '../../css/y/yzb6z-b5r.css';
import '../../css/c/ct3eolbkd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkr2umbbc"/><path class="yzb6z-b5r"/><path class="ct3eolbkd"/>`,
		"fallback": "energy-icons:brick-wall-48",
	});
}

export default Component;
