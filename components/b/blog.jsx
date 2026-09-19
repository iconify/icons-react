import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsd16mbre.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsd16mbre"/>`,
		"fallback": "fluent-mdl2:blog",
	});
}

export default Component;
