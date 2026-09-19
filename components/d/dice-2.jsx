import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpoubbo_e.css';
import '../../css/d/d8xx8hb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpoubbo_e"/><path class="d8xx8hb2e"/>`,
		"fallback": "boxicons:dice-2",
	});
}

export default Component;
