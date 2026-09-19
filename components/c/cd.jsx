import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tqw8k0f0r.css';
import '../../css/i/ir6hycbbm.css';
import '../../css/y/yiz79lqkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="tqw8k0f0r"/><path class="ir6hycbbm"/><circle class="yiz79lqkj"/></g>`,
		"fallback": "icon-park-solid:cd",
	});
}

export default Component;
