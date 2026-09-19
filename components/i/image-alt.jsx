import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbw59hkqr.css';
import '../../css/u/u19mxjbnb.css';
import '../../css/k/k16fi-_we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbw59hkqr"/><path class="u19mxjbnb"/><path class="k16fi-_we"/>`,
		"fallback": "ci:image-alt",
	});
}

export default Component;
