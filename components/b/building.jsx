import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co2zzebsy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co2zzebsy"/>`,
		"fallback": "vaadin:building",
	});
}

export default Component;
