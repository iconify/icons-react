import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zob6rkzyb.css';
import '../../css/r/r5q-9ib0i.css';
import '../../css/j/jck9mcb1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zob6rkzyb"/><path class="r5q-9ib0i"/><path class="jck9mcb1g"/></g>`,
		"fallback": "icon-park-outline:anchor-one",
	});
}

export default Component;
