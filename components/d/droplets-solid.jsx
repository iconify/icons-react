import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h9k2sgb5u.css';
import '../../css/x/xdiim3p9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h9k2sgb5u"/><path class="wm-a xdiim3p9i"/></g>`,
		"fallback": "withicons:droplets-solid",
	});
}

export default Component;
