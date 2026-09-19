import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rwd8asbpl.css';
import '../../css/q/q-2jfmgll.css';
import '../../css/i/ihmczr5tw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rwd8asbpl"/><path class="q-2jfmgll"/><path class="ihmczr5tw"/></g>`,
		"fallback": "gcp:access-context-manager",
	});
}

export default Component;
