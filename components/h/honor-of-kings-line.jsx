import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkjs8nqse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkjs8nqse"/>`,
		"fallback": "ri:honor-of-kings-line",
	});
}

export default Component;
