import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh29bfbue.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh29bfbue"/>`,
		"fallback": "zondicons:browser-window-open",
	});
}

export default Component;
