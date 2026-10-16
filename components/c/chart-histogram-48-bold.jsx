import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpel3hezc.css';
import '../../css/b/b5o99dp3a.css';
import '../../css/g/g0_zv0bau.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpel3hezc"/><path class="b5o99dp3a"/><path class="g0_zv0bau"/>`,
		"fallback": "energy-icons:chart-histogram-48-bold",
	});
}

export default Component;
