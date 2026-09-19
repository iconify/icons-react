import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/q9bjn7-6w.css';
import '../../css/r/rgpfwjbgz.css';
import '../../css/l/lh95g-0gi.css';
import '../../css/h/hkp4-3bvm.css';
import '../../css/p/p8o016kgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="q9bjn7-6w"/><path class="rgpfwjbgz"/><path class="lh95g-0gi"/><path class="hkp4-3bvm"/><path class="p8o016kgn"/></g>`,
		"fallback": "icon-park:add-computer",
	});
}

export default Component;
