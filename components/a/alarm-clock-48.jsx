import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk88l0bcp.css';
import '../../css/o/o3m77ebsl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk88l0bcp"/><path class="o3m77ebsl"/>`,
		"fallback": "energy-icons:alarm-clock-48",
	});
}

export default Component;
