import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppek0zx8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppek0zx8d"/>`,
		"fallback": "uil:6-plus",
	});
}

export default Component;
