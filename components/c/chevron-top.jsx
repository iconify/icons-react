import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqgyk5b6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqgyk5b6z"/>`,
		"fallback": "cil:chevron-top",
	});
}

export default Component;
