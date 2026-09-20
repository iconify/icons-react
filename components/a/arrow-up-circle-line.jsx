import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmq08gb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmq08gb5g"/>`,
		"fallback": "ri:arrow-up-circle-line",
	});
}

export default Component;
