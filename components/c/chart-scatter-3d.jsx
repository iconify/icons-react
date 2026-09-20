import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytt8pvboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytt8pvboo"/>`,
		"fallback": "tabler:chart-scatter-3d",
	});
}

export default Component;
