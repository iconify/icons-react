import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aykxs61ej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aykxs61ej"/>`,
		"fallback": "ion:caret-up-sharp",
	});
}

export default Component;
