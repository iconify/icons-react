import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/c/c1yjnaccy.css';
import '../../css/f/f1--t6a0g.css';
import '../../css/e/eyrc--b5n.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="c1yjnaccy"/><path class="f1--t6a0g"/><path class="eyrc--b5n"/></g>`,
		"fallback": "flag:gn-4x3",
	});
}

export default Component;
