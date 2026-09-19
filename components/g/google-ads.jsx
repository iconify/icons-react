import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/f/fw4qprb3o.css';
import '../../css/f/fd-er-bup.css';
import '../../css/j/j160kwbfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="fw4qprb3o"/><path class="fd-er-bup"/><circle transform="rotate(25 12.083 36.688)" class="j160kwbfi"/></g>`,
		"fallback": "icon-park:google-ads",
	});
}

export default Component;
