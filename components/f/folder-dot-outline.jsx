import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omdy8ssef.css';
import '../../css/x/x4h7aul0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omdy8ssef"/><path class="x4h7aul0g"/>`,
		"fallback": "solar:folder-dot-outline",
	});
}

export default Component;
