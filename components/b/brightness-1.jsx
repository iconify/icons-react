import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4vvlwbco.css';
import '../../css/a/abr1f9baw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4vvlwbco"/><path class="abr1f9baw"/></g>`,
		"fallback": "streamline-flex-color:brightness-1",
	});
}

export default Component;
