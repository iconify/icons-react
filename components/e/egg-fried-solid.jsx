import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvsrv1o8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvsrv1o8y"/>`,
		"fallback": "iconaut:egg-fried-solid",
	});
}

export default Component;
