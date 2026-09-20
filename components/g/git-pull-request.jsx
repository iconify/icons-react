import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnbv1w64h.css';
import '../../css/r/rs-90sb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnbv1w64h"/><path class="rs-90sb5n"/></g>`,
		"fallback": "tdesign:git-pull-request",
	});
}

export default Component;
