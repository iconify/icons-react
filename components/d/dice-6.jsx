import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpoubbo_e.css';
import '../../css/m/mhmgmlajz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpoubbo_e"/><path class="mhmgmlajz"/>`,
		"fallback": "boxicons:dice-6",
	});
}

export default Component;
