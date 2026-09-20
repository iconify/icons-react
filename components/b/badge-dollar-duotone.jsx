import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyospdzkg.css';
import '../../css/r/r5r1i95ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyospdzkg"/><path class="r5r1i95ve"/>`,
		"fallback": "stash:badge-dollar-duotone",
	});
}

export default Component;
