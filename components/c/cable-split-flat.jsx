import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ubjejisqd.css';
import '../../css/t/tn14iqbvu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ubjejisqd"/><path class="tn14iqbvu"/></g>`,
		"fallback": "streamline-plump-color:cable-split-flat",
	});
}

export default Component;
