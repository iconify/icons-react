import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m79a4kazg.css';
import '../../css/s/s66mzpbaq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(32 0) scale(-1 1)"><g class="ft5dv1b6b"><path class="m79a4kazg"/><path class="s66mzpbaq"/></g></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-right-dark",
	});
}

export default Component;
