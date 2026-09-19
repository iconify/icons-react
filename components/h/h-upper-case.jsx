import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6w4ul_vh.css';

const viewBox = {"width":527,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6w4ul_vh"/>`,
		"fallback": "ls:h-upper-case",
	});
}

export default Component;
