import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s42s__biu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s42s__biu"/>`,
		"fallback": "oi:bookmark",
	});
}

export default Component;
