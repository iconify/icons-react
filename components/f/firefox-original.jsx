import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhin5jgof.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhin5jgof"/>`,
		"fallback": "lineicons:firefox-original",
	});
}

export default Component;
