import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu4d6vbmq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu4d6vbmq"/>`,
		"fallback": "la:archive",
	});
}

export default Component;
