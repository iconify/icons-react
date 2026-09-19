import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/anf-_cbee.css';
import '../../css/c/csjv3olpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="anf-_cbee"/><path class="csjv3olpl"/></g>`,
		"fallback": "iconoir:design-nib",
	});
}

export default Component;
