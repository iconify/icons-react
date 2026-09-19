import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eiv10dbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eiv10dbwl"/>`,
		"fallback": "cbi:bulb-group-ceiling-square",
	});
}

export default Component;
