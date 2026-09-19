import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/b/b3pr9bc_z.css';
import '../../css/i/ihocy9b2c.css';
import '../../css/l/lkt5jbcct.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="b3pr9bc_z"/><path class="ihocy9b2c"/><path class="lkt5jbcct"/></g>`,
		"fallback": "flag:be-4x3",
	});
}

export default Component;
