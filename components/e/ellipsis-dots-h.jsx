import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx1qguu2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx1qguu2n"/>`,
		"fallback": "vaadin:ellipsis-dots-h",
	});
}

export default Component;
