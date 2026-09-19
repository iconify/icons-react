import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/n/nndn0bb0j.css';
import '../../css/c/ctyck5byh.css';
import '../../css/j/jm6531b2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><circle class="nndn0bb0j"/><circle class="ctyck5byh"/><path class="jm6531b2w"/></g>`,
		"fallback": "icon-park-solid:cherry",
	});
}

export default Component;
