import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz7-hy8bx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gz7-hy8bx"/>`,
		"fallback": "streamline-plump:fried-egg-breakfast-solid",
	});
}

export default Component;
