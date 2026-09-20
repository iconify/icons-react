import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk8ejyb7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk8ejyb7a"/>`,
		"fallback": "vaadin:cloud",
	});
}

export default Component;
