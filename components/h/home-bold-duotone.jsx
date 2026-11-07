import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jglmwo91y.css';
import '../../css/f/fpavm-beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jglmwo91y"/><path class="fpavm-beg"/>`,
		"fallback": "solar:home-bold-duotone",
	});
}

export default Component;
