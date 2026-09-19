import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df7su4w-f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df7su4w-f"/>`,
		"fallback": "fa-solid:dna",
	});
}

export default Component;
