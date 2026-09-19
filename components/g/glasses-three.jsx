import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/t/thctn0b6q.css';
import '../../css/t/timfsib0c.css';
import '../../css/g/gw-gqcb-o.css';
import '../../css/r/rrda6ybjg.css';
import '../../css/c/c8rvdpb6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="thctn0b6q"/><path class="timfsib0c"/><circle class="gw-gqcb-o"/><path class="rrda6ybjg"/><path class="c8rvdpb6h"/></g>`,
		"fallback": "icon-park:glasses-three",
	});
}

export default Component;
