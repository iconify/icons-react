import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_69tbbmq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_69tbbmq"/>`,
		"fallback": "selfhst:getcomics-dark",
	});
}

export default Component;
