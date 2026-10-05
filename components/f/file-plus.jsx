import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s_8f41qkd.css';
import '../../css/r/rlvt8hb4n.css';
import '../../css/q/q1antqapf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="s_8f41qkd"/><path class="rlvt8hb4n"/><path class="q1antqapf"/></g>`,
		"fallback": "matita:file-plus",
	});
}

export default Component;
