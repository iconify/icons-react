import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rogv-gcwu.css';
import '../../css/d/dq-bitbup.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/i/iuv5z4b4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rogv-gcwu"/><path class="dq-bitbup"/><path class="sfb8rqn9v"/><path class="iuv5z4b4l"/>`,
		"fallback": "energy-icons:boiler-x-48-bold",
	});
}

export default Component;
