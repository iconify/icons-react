import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_vin0b2m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_vin0b2m"/>`,
		"fallback": "roentgen:digital-clock",
	});
}

export default Component;
