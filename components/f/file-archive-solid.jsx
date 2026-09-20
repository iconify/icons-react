import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfd8-93rh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfd8-93rh"/>`,
		"fallback": "la:file-archive-solid",
	});
}

export default Component;
