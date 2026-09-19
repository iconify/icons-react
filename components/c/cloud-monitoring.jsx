import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwrczlbqy.css';
import '../../css/g/g-8u0m53a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwrczlbqy"/><path class="g-8u0m53a"/>`,
		"fallback": "carbon:cloud-monitoring",
	});
}

export default Component;
