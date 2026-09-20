import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an093327o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="an093327o"/>`,
		"fallback": "streamline-plump:fried-egg-breakfast-remix",
	});
}

export default Component;
