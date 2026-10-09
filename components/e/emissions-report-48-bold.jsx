import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_pz3rxhk.css';
import '../../css/e/erbbddb-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_pz3rxhk"/><path class="erbbddb-j"/>`,
		"fallback": "energy-icons:emissions-report-48-bold",
	});
}

export default Component;
