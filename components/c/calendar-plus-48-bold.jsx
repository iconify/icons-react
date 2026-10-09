import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwjkdv1oe.css';
import '../../css/b/b3suifbrv.css';
import '../../css/k/k_owl0bao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwjkdv1oe"/><path class="b3suifbrv"/><path class="k_owl0bao"/>`,
		"fallback": "energy-icons:calendar-plus-48-bold",
	});
}

export default Component;
