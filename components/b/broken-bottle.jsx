import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8iufb2qt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8iufb2qt"/>`,
		"fallback": "game-icons:broken-bottle",
	});
}

export default Component;
