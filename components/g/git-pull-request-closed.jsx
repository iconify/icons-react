import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vkyi_29-f.css';
import '../../css/g/gyqdnlqmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vkyi_29-f wm-k"/><path class="gyqdnlqmq wm-s"/></g>`,
		"fallback": "withicons-bauhaus:git-pull-request-closed",
	});
}

export default Component;
