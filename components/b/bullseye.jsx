import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5a4u33sa.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5a4u33sa"/>`,
		"fallback": "fa:bullseye",
	});
}

export default Component;
