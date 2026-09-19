import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jcs8q1beu.css';
import '../../css/u/uhmo5hb6x.css';
import '../../css/l/lxqcwwbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jcs8q1beu"/><path class="uhmo5hb6x"/><path class="lxqcwwbex"/></g>`,
		"fallback": "icon-park-outline:headset-two",
	});
}

export default Component;
