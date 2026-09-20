import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mamb4q5gb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mamb4q5gb"/>`,
		"fallback": "vaadin:backspace-a",
	});
}

export default Component;
