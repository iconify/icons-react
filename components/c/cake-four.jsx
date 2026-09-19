import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wqc8scbug.css';
import '../../css/r/rrkgq8bse.css';
import '../../css/q/qowkpdb6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="wqc8scbug"/><path class="rrkgq8bse"/><path class="qowkpdb6h"/></g>`,
		"fallback": "icon-park-solid:cake-four",
	});
}

export default Component;
