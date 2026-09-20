import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/okb-svb2v.css';
import '../../css/t/tczupne1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="okb-svb2v"/><path class="tczupne1w"/></g>`,
		"fallback": "reicon:crop4-filled",
	});
}

export default Component;
