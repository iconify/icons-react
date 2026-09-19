import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i75y9pfrr.css';
import '../../css/o/o57ldx_vu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i75y9pfrr"/><path class="o57ldx_vu"/></g>`,
		"fallback": "iconoir:github",
	});
}

export default Component;
