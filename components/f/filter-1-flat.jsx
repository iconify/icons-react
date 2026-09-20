import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhoebh7hz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhoebh7hz"/>`,
		"fallback": "streamline-plump-color:filter-1-flat",
	});
}

export default Component;
