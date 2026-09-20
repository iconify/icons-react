import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5xyj_yyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5xyj_yyd"/>`,
		"fallback": "tabler:3d-cube-sphere-off",
	});
}

export default Component;
