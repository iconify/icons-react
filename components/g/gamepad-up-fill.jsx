import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhyi92biy.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhyi92biy"/>`,
		"fallback": "memory:gamepad-up-fill",
	});
}

export default Component;
