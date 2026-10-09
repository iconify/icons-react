import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecsxwxlqe.css';
import '../../css/t/t0dlmtbvr.css';
import '../../css/b/bmv6c382p.css';
import '../../css/l/lbqk-2fig.css';
import '../../css/b/bqx1e0tys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecsxwxlqe"/><path class="t0dlmtbvr"/><path class="bmv6c382p"/><path class="lbqk-2fig"/><path class="bqx1e0tys"/>`,
		"fallback": "energy-icons:grid-connection-48-bold",
	});
}

export default Component;
