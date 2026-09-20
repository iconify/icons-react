import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flu3cfv5f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flu3cfv5f"/>`,
		"fallback": "vaadin:filter",
	});
}

export default Component;
