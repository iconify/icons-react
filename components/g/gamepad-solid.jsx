import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr2iu8bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr2iu8bhj"/>`,
		"fallback": "iconaut:gamepad-solid",
	});
}

export default Component;
