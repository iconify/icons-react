import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v8d9a_34w.css';
import '../../css/a/ammverbmu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v8d9a_34w"/><path class="ammverbmu"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-up-medium",
	});
}

export default Component;
