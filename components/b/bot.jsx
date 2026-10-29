import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ss-bu_bnf.css';
import '../../css/i/i64xizi4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ss-bu_bnf"/><path class="i64xizi4g wm-a"/></g>`,
		"fallback": "withicons:bot",
	});
}

export default Component;
