import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/git7l28wk.css';
import '../../css/n/nqnhmqeui.css';
import '../../css/u/u3ok_i7gk.css';
import '../../css/m/maprmj0tb.css';
import '../../css/u/u_3o3ug4w.css';
import '../../css/p/p3gd-mbhh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="git7l28wk"/><path class="nqnhmqeui"/><path class="u3ok_i7gk"/><path class="maprmj0tb"/><path class="u_3o3ug4w"/><path class="p3gd-mbhh"/></g>`,
		"fallback": "pepicons:contract-print",
	});
}

export default Component;
