import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jsa3ybb1d.css';
import '../../css/x/x08156b4k.css';
import '../../css/l/lxp1ug-mc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jsa3ybb1d"/><path clip-rule="evenodd" class="x08156b4k"/><path class="lxp1ug-mc"/></g>`,
		"fallback": "streamline-flex-color:graduation-cap-flat",
	});
}

export default Component;
