import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hem1ktbzj.css';
import '../../css/v/v--qb2bdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hem1ktbzj wm-k"/><path class="v--qb2bdl wm-a"/>`,
		"fallback": "withicons-bauhaus:corner-down-right",
	});
}

export default Component;
