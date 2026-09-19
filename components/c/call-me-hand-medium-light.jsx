import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/og_cgpbuz.css';
import '../../css/o/odw92-8xs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="og_cgpbuz"/><path class="odw92-8xs"/></g>`,
		"fallback": "fluent-emoji-flat:call-me-hand-medium-light",
	});
}

export default Component;
