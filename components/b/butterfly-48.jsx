import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpger37ta.css';
import '../../css/o/od_zyybil.css';
import '../../css/l/lmps3mg_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpger37ta"/><path class="od_zyybil"/><path class="lmps3mg_l"/>`,
		"fallback": "energy-icons:butterfly-48",
	});
}

export default Component;
