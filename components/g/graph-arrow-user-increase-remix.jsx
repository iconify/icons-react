import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyp0m5ztu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xyp0m5ztu"/>`,
		"fallback": "streamline-plump:graph-arrow-user-increase-remix",
	});
}

export default Component;
