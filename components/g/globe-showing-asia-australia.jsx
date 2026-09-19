import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhql4ub2e.css';
import '../../css/x/x978nqb7u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rhql4ub2e"/><path class="x978nqb7u"/></g>`,
		"fallback": "fluent-emoji-flat:globe-showing-asia-australia",
	});
}

export default Component;
