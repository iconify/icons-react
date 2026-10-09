import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az4cwab1h.css';
import '../../css/o/ouobwmwuo.css';
import '../../css/q/qing99btl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az4cwab1h"/><path class="ouobwmwuo"/><path class="qing99btl"/>`,
		"fallback": "energy-icons:battery-low-20",
	});
}

export default Component;
