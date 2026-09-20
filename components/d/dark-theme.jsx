import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtt8zm9cb.css';
import '../../css/q/qulos7bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtt8zm9cb"/><path class="qulos7bah"/></g>`,
		"fallback": "proicons:dark-theme",
	});
}

export default Component;
