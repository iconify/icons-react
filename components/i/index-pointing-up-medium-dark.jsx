import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3n1mvu9a.css';
import '../../css/e/el7z9-6wc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3n1mvu9a"/><path class="el7z9-6wc"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-up-medium-dark",
	});
}

export default Component;
