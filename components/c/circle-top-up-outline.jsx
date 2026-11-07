import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npnjj3bqi.css';
import '../../css/l/laen_wd4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npnjj3bqi"/><path class="laen_wd4e"/>`,
		"fallback": "solar:circle-top-up-outline",
	});
}

export default Component;
