import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw4-ouqqm.css';
import '../../css/l/l00-agwii.css';
import '../../css/a/anpxsm6qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw4-ouqqm"/><circle class="l00-agwii"/><circle class="anpxsm6qd"/></g>`,
		"fallback": "proicons:game",
	});
}

export default Component;
