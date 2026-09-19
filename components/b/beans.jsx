import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5tj02bmf.css';
import '../../css/k/kh6sc1b5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x5tj02bmf"/><path class="kh6sc1b5e"/></g>`,
		"fallback": "fluent-emoji-flat:beans",
	});
}

export default Component;
