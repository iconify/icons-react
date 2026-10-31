import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uylpki5kw.css';
import '../../css/r/r50vnccbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uylpki5kw"/><path class="r50vnccbb"/></g>`,
		"fallback": "coolicons:credit-card-alt-duotone-round",
	});
}

export default Component;
