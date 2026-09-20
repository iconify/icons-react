import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp-7lzc2t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp-7lzc2t"/>`,
		"fallback": "vaadin:backspace",
	});
}

export default Component;
