import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8f08ivcr.css';
import '../../css/u/ufzvs3byi.css';
import '../../css/d/d27j7obsk.css';
import '../../css/g/gxxzd4_qb.css';
import '../../css/s/syfylxqea.css';
import '../../css/b/bqy7-kv9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8f08ivcr"/><path class="ufzvs3byi"/><path class="d27j7obsk"/><path class="gxxzd4_qb"/><path class="syfylxqea"/><path class="bqy7-kv9k"/>`,
		"fallback": "energy-icons:ev-charger-x-48-bold",
	});
}

export default Component;
