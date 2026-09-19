import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/i/iiv6nwbrq.css';
import '../../css/n/nzovm6bgd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="iiv6nwbrq"/><path class="nzovm6bgd"/></g>`,
		"fallback": "icon-park-solid:gymnastics",
	});
}

export default Component;
