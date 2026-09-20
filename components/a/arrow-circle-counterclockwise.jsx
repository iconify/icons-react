import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrbsn8s-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrbsn8s-l"/>`,
		"fallback": "nrk:arrow-circle-counterclockwise",
	});
}

export default Component;
