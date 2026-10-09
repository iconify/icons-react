import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2tojgbsp.css';
import '../../css/z/z8jy6p5aj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2tojgbsp"/><path class="z8jy6p5aj"/>`,
		"fallback": "energy-icons:flow-battery-20",
	});
}

export default Component;
