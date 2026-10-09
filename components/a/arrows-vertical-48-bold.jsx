import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arf8ercmz.css';
import '../../css/w/wmf5h3zqc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arf8ercmz"/><path class="wmf5h3zqc"/>`,
		"fallback": "energy-icons:arrows-vertical-48-bold",
	});
}

export default Component;
