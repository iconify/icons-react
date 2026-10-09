import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx1d-z-yo.css';
import '../../css/g/gvnofzq5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx1d-z-yo"/><path class="gvnofzq5q"/>`,
		"fallback": "energy-icons:arrows-vertical-48",
	});
}

export default Component;
