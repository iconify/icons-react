import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9pf6sb5t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9pf6sb5t"/>`,
		"fallback": "energy-icons:caret-left-20",
	});
}

export default Component;
