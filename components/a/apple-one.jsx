import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qvh1sj-vp.css';
import '../../css/q/qm9fbjjax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="qvh1sj-vp"/><path class="qm9fbjjax"/></g>`,
		"fallback": "icon-park-outline:apple-one",
	});
}

export default Component;
