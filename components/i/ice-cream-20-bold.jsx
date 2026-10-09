import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbhs844iu.css';
import '../../css/v/vpa9dcbvo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbhs844iu"/><path class="vpa9dcbvo"/>`,
		"fallback": "energy-icons:ice-cream-20-bold",
	});
}

export default Component;
