import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zob6rkzyb.css';
import '../../css/o/od7z4jbpt.css';
import '../../css/j/jck9mcb1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zob6rkzyb"/><path class="od7z4jbpt"/><path class="jck9mcb1g"/></g>`,
		"fallback": "icon-park-solid:anchor-one",
	});
}

export default Component;
