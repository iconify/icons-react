import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v5dqb3mwd.css';
import '../../css/w/woxwp0iee.css';
import '../../css/k/kmu2up9oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v5dqb3mwd"/><path class="woxwp0iee"/><path class="kmu2up9oa"/></g>`,
		"fallback": "withicons-bauhaus:fence",
	});
}

export default Component;
