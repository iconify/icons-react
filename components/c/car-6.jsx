import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_g86w7hz.css';
import '../../css/v/v4k56rbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_g86w7hz"/><path class="v4k56rbwl"/>`,
		"fallback": "lineicons:car-6",
	});
}

export default Component;
