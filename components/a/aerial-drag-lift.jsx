import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo4arabpo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo4arabpo"/>`,
		"fallback": "pinhead:aerial-drag-lift",
	});
}

export default Component;
