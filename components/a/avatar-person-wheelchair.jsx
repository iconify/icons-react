import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/slqdkeobc.css';
import '../../css/j/ja7fhqb-k.css';
import '../../css/i/ika260a0l.css';
import '../../css/t/tze9pr_0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="slqdkeobc"/><path class="ja7fhqb-k"/><path class="ika260a0l"/><path class="tze9pr_0u"/></g>`,
		"fallback": "withicons-bauhaus:avatar-person-wheelchair",
	});
}

export default Component;
