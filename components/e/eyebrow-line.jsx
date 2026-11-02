import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbr04_brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbr04_brj"/>`,
		"fallback": "mingcute:eyebrow-line",
	});
}

export default Component;
