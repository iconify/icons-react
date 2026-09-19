import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhql4ub2e.css';
import '../../css/y/y1qexubfv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhql4ub2e"/><path class="y1qexubfv"/></g>`,
		"fallback": "fluent-emoji-flat:globe-showing-europe-africa",
	});
}

export default Component;
