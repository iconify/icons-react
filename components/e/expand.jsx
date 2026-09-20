import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm-q11b-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm-q11b-m"/>`,
		"fallback": "vaadin:expand",
	});
}

export default Component;
