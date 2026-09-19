import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/idjlyibdv.css';
import '../../css/l/lqs9vvb0u.css';
import '../../css/q/q_6picbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="idjlyibdv"/><path class="lqs9vvb0u"/><path class="q_6picbex"/></g>`,
		"fallback": "icon-park-outline:email-down",
	});
}

export default Component;
