import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iez2hnbzm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iez2hnbzm"/>`,
		"fallback": "osmic:beverages-14",
	});
}

export default Component;
