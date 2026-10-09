import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdmlx9xfd.css';
import '../../css/n/n4jpvghns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdmlx9xfd"/><path class="n4jpvghns"/>`,
		"fallback": "energy-icons:corner-down-right-20-bold",
	});
}

export default Component;
