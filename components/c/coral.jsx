import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as2iwumwv.css';
import '../../css/k/kwzcfwb6x.css';
import '../../css/p/petp2dagr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="as2iwumwv"/><path class="kwzcfwb6x"/><path class="petp2dagr"/></g>`,
		"fallback": "fluent-emoji-flat:coral",
	});
}

export default Component;
