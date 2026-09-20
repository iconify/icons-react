import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7qvhrbja.css';
import '../../css/q/q-q0i_h1e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7qvhrbja"/><path class="q-q0i_h1e"/>`,
		"fallback": "oui:copy-clipboard",
	});
}

export default Component;
