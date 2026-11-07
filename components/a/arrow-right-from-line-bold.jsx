import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xteelq4gg.css';
import '../../css/h/h28ok-b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xteelq4gg"/><path class="h28ok-b2f"/>`,
		"fallback": "solar:arrow-right-from-line-bold",
	});
}

export default Component;
