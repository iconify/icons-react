import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/q3bgkubrx.css';
import '../../css/n/nv21rbpbn.css';
import '../../css/j/jmymbhwhv.css';
import '../../css/l/lmc0pzw-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="q3bgkubrx wm-shadow"/><path class="nv21rbpbn wm-shadow"/><path class="jmymbhwhv"/><path class="lmc0pzw-h"/></g>`,
		"fallback": "withicons-brutal:app-window",
	});
}

export default Component;
