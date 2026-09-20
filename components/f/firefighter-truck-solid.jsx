import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejz2q7bgo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ejz2q7bgo"/>`,
		"fallback": "streamline-plump:firefighter-truck-solid",
	});
}

export default Component;
