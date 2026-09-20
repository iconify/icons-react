import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7nujkzvg.css';
import '../../css/u/u9y3aibok.css';
import '../../css/v/vf6i915qg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7nujkzvg"/><path class="u9y3aibok"/><path class="vf6i915qg"/>`,
		"fallback": "token:dsm",
	});
}

export default Component;
