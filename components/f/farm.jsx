import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn_1_85bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yn_1_85bv"/>`,
		"fallback": "iconoir:farm",
	});
}

export default Component;
