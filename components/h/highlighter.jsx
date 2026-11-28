import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ox74gzd0h.css';
import '../../css/v/v96i2q43c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ox74gzd0h"/><path class="v96i2q43c"/></g>`,
		"fallback": "iconaut:highlighter",
	});
}

export default Component;
