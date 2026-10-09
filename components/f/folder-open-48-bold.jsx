import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7n36ms-b.css';
import '../../css/a/a1wp-ubtq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7n36ms-b"/><path class="a1wp-ubtq"/>`,
		"fallback": "energy-icons:folder-open-48-bold",
	});
}

export default Component;
