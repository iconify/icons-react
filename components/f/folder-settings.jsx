import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/ctq-00ygq.css';
import '../../css/e/ebxpicc9l.css';
import '../../css/j/jk98jeb-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ctq-00ygq"/><circle class="ebxpicc9l"/><path class="jk98jeb-y"/></g>`,
		"fallback": "icon-park-outline:folder-settings",
	});
}

export default Component;
