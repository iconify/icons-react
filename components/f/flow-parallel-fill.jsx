import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxcz66biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxcz66biy"/>`,
		"fallback": "si:flow-parallel-fill",
	});
}

export default Component;
