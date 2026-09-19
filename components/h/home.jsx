import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shzc-6b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shzc-6b4p"/>`,
		"fallback": "iconamoon:home",
	});
}

export default Component;
