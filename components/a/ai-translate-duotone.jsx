import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut2-xbo2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary ut2-xbo2r"/>`,
		"fallback": "iconaut:ai-translate-duotone",
	});
}

export default Component;
