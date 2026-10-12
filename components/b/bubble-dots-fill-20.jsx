import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcaj3m83n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcaj3m83n"/>`,
		"fallback": "garden:bubble-dots-fill-20",
	});
}

export default Component;
