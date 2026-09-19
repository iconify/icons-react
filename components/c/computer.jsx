import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xd0085bqe.css';
import '../../css/x/xq0l1dbym.css';
import '../../css/e/e5fqixblw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xd0085bqe"/><rect class="xq0l1dbym"/><path class="e5fqixblw"/></g>`,
		"fallback": "icon-park-outline:computer",
	});
}

export default Component;
