import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/s/sq212eb3t.css';
import '../../css/q/qyprq1f6b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rjn-u5bcv"/><circle class="sq212eb3t"/><path class="qyprq1f6b"/></g>`,
		"fallback": "icon-park-outline:folder-block-one",
	});
}

export default Component;
