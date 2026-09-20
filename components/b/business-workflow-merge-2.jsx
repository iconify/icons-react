import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yurwjibje.css';
import '../../css/v/vqsj2lnqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yurwjibje"/><path class="vqsj2lnqd"/>`,
		"fallback": "streamline-freehand:business-workflow-merge-2",
	});
}

export default Component;
