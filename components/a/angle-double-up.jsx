import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a33b94myo.css';
import '../../css/o/o08jojm8w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a33b94myo"/><path class="o08jojm8w"/>`,
		"fallback": "vaadin:angle-double-up",
	});
}

export default Component;
