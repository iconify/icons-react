import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/q/qtql_xblt.css';
import '../../css/h/h_e__xbco.css';
import '../../css/j/j-jwpkb8s.css';
import '../../css/u/uy3t-nfle.css';
import '../../css/h/h8ovhqxti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="qtql_xblt"/><path class="h_e__xbco"/><path class="j-jwpkb8s"/><path class="uy3t-nfle"/><path class="h8ovhqxti"/></g>`,
		"fallback": "withicons-retro:folder-search",
	});
}

export default Component;
