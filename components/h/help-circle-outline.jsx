import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf19r5bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf19r5bjl"/>`,
		"fallback": "ci:help-circle-outline",
	});
}

export default Component;
