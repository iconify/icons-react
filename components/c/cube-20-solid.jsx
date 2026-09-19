import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe45mab1n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe45mab1n"/>`,
		"fallback": "heroicons:cube-20-solid",
	});
}

export default Component;
