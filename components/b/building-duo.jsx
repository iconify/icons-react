import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbl52hexa.css';
import '../../css/u/uf15v2ukv.css';
import '../../css/k/k4z577z4r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbl52hexa"/><path class="uf15v2ukv"/><path class="k4z577z4r"/></g>`,
		"fallback": "glyphs:building-duo",
	});
}

export default Component;
