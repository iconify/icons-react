import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upkt8ry-l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upkt8ry-l"/>`,
		"fallback": "vaadin:bell-slash-o",
	});
}

export default Component;
