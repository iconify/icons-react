import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afqa3ibvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afqa3ibvf"/>`,
		"fallback": "fa6-regular:chess-queen",
	});
}

export default Component;
