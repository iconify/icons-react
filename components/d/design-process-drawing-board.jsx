import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytj7at_sk.css';
import '../../css/b/b4ouy7bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytj7at_sk"/><path class="b4ouy7bdx"/>`,
		"fallback": "streamline-freehand:design-process-drawing-board",
	});
}

export default Component;
