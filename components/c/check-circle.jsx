import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5uzhbhz.css';
import '../../css/t/t0-t7obvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5uzhbhz wm-k"/><path class="t0-t7obvm wm-a"/>`,
		"fallback": "withicons-bauhaus:check-circle",
	});
}

export default Component;
