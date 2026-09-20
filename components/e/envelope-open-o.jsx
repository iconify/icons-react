import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzzp38b1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzzp38b1b"/>`,
		"fallback": "vaadin:envelope-open-o",
	});
}

export default Component;
