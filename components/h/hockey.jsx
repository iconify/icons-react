import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5cg8fb9r.css';
import '../../css/g/g21s66bzs.css';
import '../../css/x/xlcp1d9yz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y5cg8fb9r"><path class="g21s66bzs"/><path class="xlcp1d9yz"/></g>`,
		"fallback": "icon-park-outline:hockey",
	});
}

export default Component;
