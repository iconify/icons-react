import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8o2mmbrq.css';
import '../../css/t/t_9pnl1bo.css';
import '../../css/z/zvvso5rkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8o2mmbrq"/><rect class="t_9pnl1bo"/><rect class="zvvso5rkk"/>`,
		"fallback": "boxicons:align-horizontal-space-between-filled",
	});
}

export default Component;
