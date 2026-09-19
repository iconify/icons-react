import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/h/h1fa15bad.css';
import '../../css/e/e-ox9dfrk.css';
import '../../css/k/kio7hq5vb.css';
import '../../css/r/r8dhuib2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><rect class="ljdas5boi"/><rect class="h1fa15bad"/><rect class="e-ox9dfrk"/><path class="kio7hq5vb"/><path class="r8dhuib2w"/></g>`,
		"fallback": "icon-park:ethernet-on",
	});
}

export default Component;
