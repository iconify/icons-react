import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsubc8bso.css';
import '../../css/r/rmib92a5m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsubc8bso"/><path class="rmib92a5m"/>`,
		"fallback": "carbon:alarm-add",
	});
}

export default Component;
