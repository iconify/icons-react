import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/binrbta7q.css';
import '../../css/n/nd8dqhb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="binrbta7q"/><path class="nd8dqhb4d"/>`,
		"fallback": "pixel:bitcoin",
	});
}

export default Component;
