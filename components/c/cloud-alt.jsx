import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfape-b7s.css';
import '../../css/x/xiainnh1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wfape-b7s"/><path class="xiainnh1m"/></g>`,
		"fallback": "lets-icons:cloud-alt",
	});
}

export default Component;
