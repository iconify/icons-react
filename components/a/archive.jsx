import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft9sjzb0k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft9sjzb0k"/>`,
		"fallback": "vaadin:archive",
	});
}

export default Component;
