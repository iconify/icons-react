import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdy5yl5us.css';
import '../../css/k/kanbl39ly.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdy5yl5us"/><path class="kanbl39ly"/>`,
		"fallback": "energy-icons:bag-20-bold",
	});
}

export default Component;
