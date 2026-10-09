import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c25jzkbsf.css';
import '../../css/w/wy4_yib2c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c25jzkbsf"/><path class="wy4_yib2c"/>`,
		"fallback": "energy-icons:arrow-up-to-line-20",
	});
}

export default Component;
