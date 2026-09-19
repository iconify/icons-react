import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-iiisbix.css';
import '../../css/b/brwrshb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-iiisbix"/><path clip-rule="evenodd" class="brwrshb8o"/>`,
		"fallback": "basil:info-rect-outline",
	});
}

export default Component;
