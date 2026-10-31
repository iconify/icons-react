import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq6vgh4pm.css';
import '../../css/q/qtrx7mbhq.css';
import '../../css/v/vyj9pmbht.css';
import '../../css/v/vuuwxwbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qq6vgh4pm wm-k"/><path class="qtrx7mbhq wm-a"/><path class="vyj9pmbht wm-a"/><path class="vuuwxwbgh wm-s"/></g>`,
		"fallback": "withicons-lunar:clipboard-list",
	});
}

export default Component;
