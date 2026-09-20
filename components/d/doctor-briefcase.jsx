import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urysg1b4n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urysg1b4n"/>`,
		"fallback": "vaadin:doctor-briefcase",
	});
}

export default Component;
