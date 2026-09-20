import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2yj-ob8r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2yj-ob8r"/>`,
		"fallback": "pinhead:aerial-tram",
	});
}

export default Component;
