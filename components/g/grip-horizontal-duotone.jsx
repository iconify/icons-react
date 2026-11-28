import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1hzv5bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1hzv5bvp primary"/>`,
		"fallback": "iconaut:grip-horizontal-duotone",
	});
}

export default Component;
