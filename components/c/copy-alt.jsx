import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn777jbnb.css';
import '../../css/f/ff5-g6s7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn777jbnb"/><path class="ff5-g6s7q"/>`,
		"fallback": "bxs:copy-alt",
	});
}

export default Component;
