import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh2tvfbrv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh2tvfbrv"/>`,
		"fallback": "zondicons:chart-bar",
	});
}

export default Component;
