import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b23un12lm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ciud1kn-e.css';
import '../../css/l/lcrewz3kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b23un12lm secondary"/><g class="dt0cm9dhy primary"><path class="ciud1kn-e"/><path class="lcrewz3kz"/></g>`,
		"fallback": "iconaut:duck-duo",
	});
}

export default Component;
