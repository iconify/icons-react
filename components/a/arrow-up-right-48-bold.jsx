import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbj7ts9zy.css';
import '../../css/e/efdwgfbme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbj7ts9zy"/><path class="efdwgfbme"/>`,
		"fallback": "energy-icons:arrow-up-right-48-bold",
	});
}

export default Component;
