import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7misdb5l.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7misdb5l"/>`,
		"fallback": "zmdi:format-subject",
	});
}

export default Component;
