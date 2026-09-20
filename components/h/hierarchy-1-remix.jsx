import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su41rpb8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="su41rpb8v"/>`,
		"fallback": "streamline-plump:hierarchy-1-remix",
	});
}

export default Component;
