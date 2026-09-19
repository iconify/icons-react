import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clmyyrbgn.css';
import '../../css/t/tk_g9tbet.css';
import '../../css/t/td9thst6s.css';
import '../../css/j/jzwau4b4g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="clmyyrbgn"/><path class="tk_g9tbet"/><path class="td9thst6s"/><path class="jzwau4b4g"/></g>`,
		"fallback": "fluent-emoji-flat:alien",
	});
}

export default Component;
