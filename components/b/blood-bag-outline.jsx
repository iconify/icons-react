import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5i-2dx-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k5i-2dx-j"/>`,
		"fallback": "healthicons:blood-bag-outline",
	});
}

export default Component;
