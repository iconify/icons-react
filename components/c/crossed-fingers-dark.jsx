import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6zgwobbr.css';
import '../../css/l/l1r-9q9dl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v6zgwobbr"/><path class="l1r-9q9dl"/></g>`,
		"fallback": "fluent-emoji-flat:crossed-fingers-dark",
	});
}

export default Component;
