import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbeq0b47x.css';
import '../../css/b/b40519b-w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbeq0b47x"/><path class="b40519b-w"/>`,
		"fallback": "energy-icons:alarm-clock-20",
	});
}

export default Component;
