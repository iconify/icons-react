import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkt4xdbyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nkt4xdbyr"/>`,
		"fallback": "streamline-freehand:copy-paste-cut-scissors",
	});
}

export default Component;
