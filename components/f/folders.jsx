import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ajpmro27u.css';
import '../../css/e/e9566xe_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ajpmro27u wm-k"/><path class="e9566xe_t wm-a"/></g>`,
		"fallback": "withicons-bauhaus:folders",
	});
}

export default Component;
