import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tod_2acqn.css';
import '../../css/h/hj1bo3bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tod_2acqn"/><path class="hj1bo3bef"/>`,
		"fallback": "boxicons:arrow-down-wide-narrow",
	});
}

export default Component;
