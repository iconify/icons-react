import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/ughwv1b5j.css';
import '../../css/r/r1yww25tm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ughwv1b5j"/><path class="r1yww25tm"/></g>`,
		"fallback": "icon-park-solid:distribute-horizontal-spacing",
	});
}

export default Component;
