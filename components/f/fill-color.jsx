import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5fot-9cb.css';
import '../../css/x/x6y14mboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5fot-9cb"/><path class="x6y14mboc"/></g>`,
		"fallback": "tdesign:fill-color",
	});
}

export default Component;
