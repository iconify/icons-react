import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dru9-5oma.css';
import '../../css/f/fr5kl9bxl.css';
import '../../css/p/pinqdebty.css';
import '../../css/b/b6i3s7bvv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dru9-5oma"/><path clip-rule="evenodd" class="fr5kl9bxl"/><path class="pinqdebty"/><path class="b6i3s7bvv"/></g>`,
		"fallback": "pepicons:eye-off-print",
	});
}

export default Component;
