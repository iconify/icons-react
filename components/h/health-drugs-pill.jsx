import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tet16qbak.css';
import '../../css/w/w_q_buz-q.css';
import '../../css/z/zar5c9-1e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tet16qbak"/><path class="w_q_buz-q"/><path class="zar5c9-1e"/>`,
		"fallback": "streamline-pixel:health-drugs-pill",
	});
}

export default Component;
