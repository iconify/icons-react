import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4_udjxz.css';
import '../../css/a/anrgkxx6u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ti4_udjxz"/><path class="anrgkxx6u"/>`,
		"fallback": "energy-icons:calendar-range-20",
	});
}

export default Component;
