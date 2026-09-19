import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-q68rezq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t-q68rezq"/>`,
		"fallback": "healthicons:artificial-intelligence2x-outline",
	});
}

export default Component;
