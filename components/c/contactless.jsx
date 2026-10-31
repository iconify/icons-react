import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k2k6wrbli.css';
import '../../css/u/uk4liwe1r.css';
import '../../css/b/b572__8fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="k2k6wrbli wm-k"/><path class="uk4liwe1r wm-a"/><path class="b572__8fz wm-deco"/></g>`,
		"fallback": "withicons-kawaii:contactless",
	});
}

export default Component;
