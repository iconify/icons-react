import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-249hgfl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-249hgfl"/>`,
		"fallback": "oi:infinity",
	});
}

export default Component;
