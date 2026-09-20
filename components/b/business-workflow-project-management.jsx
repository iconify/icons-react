import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc_6ewbba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc_6ewbba"/>`,
		"fallback": "streamline-freehand:business-workflow-project-management",
	});
}

export default Component;
