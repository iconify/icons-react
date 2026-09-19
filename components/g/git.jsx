import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0m4rffbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0m4rffbo"/>`,
		"fallback": "bxl:git",
	});
}

export default Component;
