import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj3enubxw.css';

const viewBox = {"width":384,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj3enubxw"/>`,
		"fallback": "ps:forward",
	});
}

export default Component;
