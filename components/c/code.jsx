import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dg8r48zoo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dg8r48zoo"/>`,
		"fallback": "vaadin:code",
	});
}

export default Component;
