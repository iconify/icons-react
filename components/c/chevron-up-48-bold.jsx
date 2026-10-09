import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdj4_lhpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdj4_lhpa"/>`,
		"fallback": "energy-icons:chevron-up-48-bold",
	});
}

export default Component;
