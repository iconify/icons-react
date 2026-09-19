import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qf6nxob5u.css';
import '../../css/m/m_7q05b5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="qf6nxob5u"/><path class="m_7q05b5b"/></g>`,
		"fallback": "icon-park-outline:icecream-three",
	});
}

export default Component;
