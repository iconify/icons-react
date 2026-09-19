import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6a_92b6g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p6a_92b6g"/>`,
		"fallback": "healthicons:3-outline",
	});
}

export default Component;
