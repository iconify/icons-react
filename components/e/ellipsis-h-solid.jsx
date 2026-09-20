import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4abl3zcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4abl3zcm"/>`,
		"fallback": "stash:ellipsis-h-solid",
	});
}

export default Component;
