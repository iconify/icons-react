import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_hcd3bgg.css';
import '../../css/q/qi6qfqz0i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_hcd3bgg"/><path class="qi6qfqz0i"/>`,
		"fallback": "energy-icons:fuel-cell-48",
	});
}

export default Component;
