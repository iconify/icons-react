import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-29u-bwn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-29u-bwn"/>`,
		"fallback": "vaadin:esc-a",
	});
}

export default Component;
