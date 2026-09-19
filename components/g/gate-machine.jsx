import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/b/b_wap9baf.css';
import '../../css/y/y0yq2e4to.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="b_wap9baf"/><path class="y0yq2e4to"/></g>`,
		"fallback": "icon-park-outline:gate-machine",
	});
}

export default Component;
