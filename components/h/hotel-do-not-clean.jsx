import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcoah42wi.css';
import '../../css/d/ds8ycwqxk.css';
import '../../css/w/wvv5gvb_e.css';
import '../../css/j/jrzpgj3pr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lcoah42wi"/><path class="ds8ycwqxk"/><path class="wvv5gvb_e"/><path class="jrzpgj3pr"/></g>`,
		"fallback": "icon-park:hotel-do-not-clean",
	});
}

export default Component;
