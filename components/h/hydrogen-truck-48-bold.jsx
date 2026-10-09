import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avjgpmkfp.css';
import '../../css/d/dd3vljzrf.css';
import '../../css/r/rd9jhd3hp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avjgpmkfp"/><path class="dd3vljzrf"/><path class="rd9jhd3hp"/>`,
		"fallback": "energy-icons:hydrogen-truck-48-bold",
	});
}

export default Component;
