import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ptz9fvg.css';
import '../../css/o/o04p_sbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-ptz9fvg"/><path class="o04p_sbfu"/>`,
		"fallback": "boxicons:arrow-in-down-square-half-filled",
	});
}

export default Component;
