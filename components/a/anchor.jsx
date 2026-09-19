import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/eptqnp95c.css';
import '../../css/j/j9qe56bhi.css';
import '../../css/m/m3ykmcy1q.css';
import '../../css/y/yjl1c1boa.css';
import '../../css/j/j73mfxbcw.css';
import '../../css/a/a9bp5w-wm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="eptqnp95c"/><rect class="j9qe56bhi"/><rect class="m3ykmcy1q"/><rect class="yjl1c1boa"/><rect class="j73mfxbcw"/><path class="a9bp5w-wm"/></g>`,
		"fallback": "icon-park-solid:anchor",
	});
}

export default Component;
