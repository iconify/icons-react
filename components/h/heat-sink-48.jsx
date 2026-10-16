import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6gupfjay.css';
import '../../css/j/j7hxfr2_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6gupfjay"/><path class="j7hxfr2_o"/>`,
		"fallback": "energy-icons:heat-sink-48",
	});
}

export default Component;
