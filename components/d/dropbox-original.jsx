import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0kd4mg4y.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0kd4mg4y"/>`,
		"fallback": "lineicons:dropbox-original",
	});
}

export default Component;
