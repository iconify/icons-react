import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtx1i6bii.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtx1i6bii"/>`,
		"fallback": "pinhead:hand-with-eye",
	});
}

export default Component;
