import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4pejze1p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4pejze1p"/>`,
		"fallback": "streamline-flex:arrow-cursor-move-solid",
	});
}

export default Component;
