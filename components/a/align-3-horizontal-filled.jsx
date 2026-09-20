import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iuxaczbto.css';
import '../../css/f/ff_z8rm8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="iuxaczbto"/><rect class="ff_z8rm8a"/></g>`,
		"fallback": "reicon:align-3-horizontal-filled",
	});
}

export default Component;
