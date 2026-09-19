import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rjbeyfbeg.css';
import '../../css/k/kl1g20b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rjbeyfbeg"/><path class="kl1g20b1w"/></g>`,
		"fallback": "iconoir:crop-rotate-tl",
	});
}

export default Component;
