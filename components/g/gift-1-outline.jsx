import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rq-x5bbmf.css';
import '../../css/f/fg93w_b9k.css';
import '../../css/o/ov5ow7bzu.css';
import '../../css/n/n8gbrmbww.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rq-x5bbmf"/><path clip-rule="evenodd" class="fg93w_b9k"/><path class="ov5ow7bzu"/><path clip-rule="evenodd" class="n8gbrmbww"/></g>`,
		"fallback": "glyphs:gift-1-outline",
	});
}

export default Component;
