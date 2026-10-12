import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tem_62y7z.css';
import '../../css/y/yx0hc3b0s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tem_62y7z"/><path class="yx0hc3b0s"/>`,
		"fallback": "garden:car-stroke-20",
	});
}

export default Component;
