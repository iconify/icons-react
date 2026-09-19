import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwa9eacvi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwa9eacvi"/>`,
		"fallback": "f7:arrowshape-turn-up-left-circle",
	});
}

export default Component;
