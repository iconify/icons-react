import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcuxoi32t.css';
import '../../css/r/r-j6oub_k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcuxoi32t"/><path class="r-j6oub_k"/>`,
		"fallback": "energy-icons:chevrons-up-48",
	});
}

export default Component;
