import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1yqa-buz.css';
import '../../css/r/r-femsbxa.css';
import '../../css/s/s1lmhub7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e1yqa-buz"/><path class="r-femsbxa"/><path class="s1lmhub7n"/></g>`,
		"fallback": "streamline-ultimate-color:airplane-mode",
	});
}

export default Component;
