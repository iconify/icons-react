import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fiqwvobaq.css';
import '../../css/f/fckq11bbx.css';
import '../../css/g/go6zdtbjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fiqwvobaq"/><path clip-rule="evenodd" class="fckq11bbx"/><path class="go6zdtbjq"/></g>`,
		"fallback": "keyline-icons:coffee-sharp-duotone",
	});
}

export default Component;
