import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc5zs4bsx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pc5zs4bsx"/>`,
		"fallback": "streamline-plump:customer-support-7-remix",
	});
}

export default Component;
