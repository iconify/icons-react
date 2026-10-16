import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci9il8bto.css';
import '../../css/n/np35iacps.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci9il8bto"/><path class="np35iacps"/>`,
		"fallback": "energy-icons:heat-sink-20",
	});
}

export default Component;
