import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3-yj2o_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3-yj2o_y"/>`,
		"fallback": "iconaut:align-right-solid",
	});
}

export default Component;
