import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/efl_o_l-c.css';
import '../../css/b/bg-i77b7c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(32 0) scale(-1 1)"><g class="ft5dv1b6b"><path class="efl_o_l-c"/><path class="bg-i77b7c"/></g></g>`,
		"fallback": "fluent-emoji-flat:backhand-index-pointing-right-medium-light",
	});
}

export default Component;
