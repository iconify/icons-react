import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0l0sffqq.css';
import '../../css/i/i-t8ufy3r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x0l0sffqq"/><path class="i-t8ufy3r"/></g>`,
		"fallback": "fluent-emoji-flat:dress",
	});
}

export default Component;
