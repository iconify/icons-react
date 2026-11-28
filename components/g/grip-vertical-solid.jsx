import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cluy_9boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cluy_9boq"/>`,
		"fallback": "iconaut:grip-vertical-solid",
	});
}

export default Component;
