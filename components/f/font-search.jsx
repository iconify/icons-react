import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopnm44um.css';
import '../../css/x/xc0ukmu8r.css';
import '../../css/q/qgfu9slmj.css';
import '../../css/g/g1tm12z0p.css';
import '../../css/j/jjsq0e7nx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gopnm44um"><circle class="xc0ukmu8r"/><path class="qgfu9slmj"/><path class="g1tm12z0p"/><path class="jjsq0e7nx"/></g>`,
		"fallback": "icon-park:font-search",
	});
}

export default Component;
