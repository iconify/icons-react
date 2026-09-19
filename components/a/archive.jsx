import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6v2zhbar.css';

const viewBox = {"width":512,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6v2zhbar"/>`,
		"fallback": "ps:archive",
	});
}

export default Component;
