import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ybs81lb1q.css';
import '../../css/u/ukjma8bdv.css';
import '../../css/r/rjmd6lg4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ybs81lb1q"/><path class="ukjma8bdv"/><path class="rjmd6lg4e"/></g>`,
		"fallback": "streamline-ultimate:information-circle",
	});
}

export default Component;
