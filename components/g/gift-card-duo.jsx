import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tk-xkothd.css';
import '../../css/v/v3_lbcvvv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tk-xkothd"/><path class="v3_lbcvvv"/></g>`,
		"fallback": "glyphs:gift-card-duo",
	});
}

export default Component;
