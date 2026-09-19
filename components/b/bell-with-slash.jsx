import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_aeo3bes.css';
import '../../css/h/h9q6cw2rm.css';
import '../../css/b/bnoq2abfn.css';
import '../../css/m/m9h5tppbe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q_aeo3bes"/><path class="h9q6cw2rm"/><path class="bnoq2abfn"/><path class="m9h5tppbe"/></g>`,
		"fallback": "fluent-emoji-flat:bell-with-slash",
	});
}

export default Component;
