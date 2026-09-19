import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u-du--bfm.css';
import '../../css/f/f62cqfb1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="u-du--bfm"/><path class="f62cqfb1v"/></g>`,
		"fallback": "icon-park-solid:gongfu",
	});
}

export default Component;
