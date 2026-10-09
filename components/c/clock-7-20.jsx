import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/f/f9t5soysm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="f9t5soysm"/>`,
		"fallback": "energy-icons:clock-7-20",
	});
}

export default Component;
