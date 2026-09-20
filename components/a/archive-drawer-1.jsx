import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqb5k47cq.css';
import '../../css/v/vmv46cbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqb5k47cq"/><path class="vmv46cbuu"/>`,
		"fallback": "streamline-freehand:archive-drawer-1",
	});
}

export default Component;
