import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/c_4c5cc2r.css';
import '../../css/q/qj-74wbfr.css';
import '../../css/o/outxdn7yt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="c_4c5cc2r"/><circle class="qj-74wbfr"/><path class="outxdn7yt"/></g>`,
		"fallback": "icon-park-solid:email-search",
	});
}

export default Component;
