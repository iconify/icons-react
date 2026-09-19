import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybtx3i9au.css';
import '../../css/n/nusg7bcai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ybtx3i9au"/><path class="nusg7bcai"/></g>`,
		"fallback": "heroicons:fire",
	});
}

export default Component;
