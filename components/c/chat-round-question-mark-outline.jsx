import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsm1dmd4a.css';
import '../../css/f/fnzdhr9jf.css';
import '../../css/x/x9024bb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsm1dmd4a"/><path class="fnzdhr9jf"/><path clip-rule="evenodd" class="x9024bb4v"/>`,
		"fallback": "solar:chat-round-question-mark-outline",
	});
}

export default Component;
