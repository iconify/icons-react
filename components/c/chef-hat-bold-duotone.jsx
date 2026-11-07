import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p69thbcke.css';
import '../../css/r/r_skykbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p69thbcke"/><path class="r_skykbnr"/>`,
		"fallback": "solar:chef-hat-bold-duotone",
	});
}

export default Component;
