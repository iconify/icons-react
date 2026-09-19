import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggf0qnbbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggf0qnbbq"/>`,
		"fallback": "ps:forbidden",
	});
}

export default Component;
