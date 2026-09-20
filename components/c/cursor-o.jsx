import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lthpuj_eq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lthpuj_eq"/>`,
		"fallback": "vaadin:cursor-o",
	});
}

export default Component;
