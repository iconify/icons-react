import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xspq7il3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xspq7il3i"/>`,
		"fallback": "healthicons:h",
	});
}

export default Component;
