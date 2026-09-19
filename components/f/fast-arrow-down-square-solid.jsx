import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_kkygljr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o_kkygljr"/>`,
		"fallback": "iconoir:fast-arrow-down-square-solid",
	});
}

export default Component;
