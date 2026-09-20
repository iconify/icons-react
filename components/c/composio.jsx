import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0vjz3bdl.css';
import '../../css/q/qzr3vv_na.css';
import '../../css/t/t1128_esl.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGpc8vm3TC)"><path class="c0vjz3bdl"/><path class="qzr3vv_na"/></g><defs><clipPath id="SVGpc8vm3TC"><path class="t1128_esl"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:composio",
	});
}

export default Component;
