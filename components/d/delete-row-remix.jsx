import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_-d0tb8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x_-d0tb8v"/>`,
		"fallback": "streamline-plump:delete-row-remix",
	});
}

export default Component;
