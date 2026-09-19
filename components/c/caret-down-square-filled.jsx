import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rusai8b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rusai8b6b"/>`,
		"fallback": "boxicons:caret-down-square-filled",
	});
}

export default Component;
