import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1m__bn8a.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1m__bn8a"/>`,
		"fallback": "iwwa:drag-drop",
	});
}

export default Component;
