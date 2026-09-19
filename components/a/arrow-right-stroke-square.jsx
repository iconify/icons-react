import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v76o_pbxz.css';
import '../../css/j/jor-usn7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v76o_pbxz"/><path class="jor-usn7v"/>`,
		"fallback": "boxicons:arrow-right-stroke-square",
	});
}

export default Component;
