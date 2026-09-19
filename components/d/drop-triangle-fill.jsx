import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s68c4_3ec.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s68c4_3ec"/>`,
		"fallback": "f7:drop-triangle-fill",
	});
}

export default Component;
