import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdf8vni2w.css';
import '../../css/k/ka0y_qb6x.css';
import '../../css/g/g6llgnykv.css';
import '../../css/i/ib6autsjx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdf8vni2w"/><path class="ka0y_qb6x"/><path class="g6llgnykv"/><path class="ib6autsjx"/>`,
		"fallback": "teenyicons:chrome-solid",
	});
}

export default Component;
