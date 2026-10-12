import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn7_7837p.css';
import '../../css/m/mjr421z4p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn7_7837p"/><path class="mjr421z4p"/>`,
		"fallback": "garden:archive-stroke-20",
	});
}

export default Component;
