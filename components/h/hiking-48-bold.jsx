import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi-w-lr1f.css';
import '../../css/d/db7c96bxv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi-w-lr1f"/><path class="db7c96bxv"/>`,
		"fallback": "energy-icons:hiking-48-bold",
	});
}

export default Component;
