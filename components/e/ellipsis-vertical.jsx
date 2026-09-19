import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbncdkb9d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbncdkb9d"/>`,
		"fallback": "f7:ellipsis-vertical",
	});
}

export default Component;
