import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrd258wwo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrd258wwo"/>`,
		"fallback": "picon:dice5",
	});
}

export default Component;
