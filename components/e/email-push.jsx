import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/q4hxgk5vf.css';
import '../../css/q/q_6picbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="q4hxgk5vf"/><path class="q_6picbex"/></g>`,
		"fallback": "icon-park-outline:email-push",
	});
}

export default Component;
