import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utl2tvf5z.css';
import '../../css/m/mpy7uabqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utl2tvf5z"/><path class="mpy7uabqc"/>`,
		"fallback": "token:agix",
	});
}

export default Component;
