import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyem04bnp.css';
import '../../css/l/lt-wzybgs.css';
import '../../css/v/vcu5axb8g.css';
import '../../css/c/cihjl83ho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pyem04bnp"/><path class="lt-wzybgs"/><path class="vcu5axb8g"/><path class="cihjl83ho"/></g>`,
		"fallback": "fluent-emoji-flat:camel",
	});
}

export default Component;
