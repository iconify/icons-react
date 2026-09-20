import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr2fh6b0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr2fh6b0n"/>`,
		"fallback": "subway:cercle-8",
	});
}

export default Component;
