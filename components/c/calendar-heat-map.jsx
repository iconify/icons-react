import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpyx0diih.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpyx0diih"/>`,
		"fallback": "carbon:calendar-heat-map",
	});
}

export default Component;
