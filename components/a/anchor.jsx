import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/eptqnp95c.css';
import '../../css/j/jbmyj2wkc.css';
import '../../css/n/ns95e1bfk.css';
import '../../css/m/mjd1iueju.css';
import '../../css/u/u4wtzmbbk.css';
import '../../css/a/a9bp5w-wm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="eptqnp95c"/><rect class="jbmyj2wkc"/><rect class="ns95e1bfk"/><rect class="mjd1iueju"/><rect class="u4wtzmbbk"/><path class="a9bp5w-wm"/></g>`,
		"fallback": "icon-park-outline:anchor",
	});
}

export default Component;
