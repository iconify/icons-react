import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nibs_lbmi.css';
import '../../css/a/as15v3bwn.css';
import '../../css/q/qrc405bkt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nibs_lbmi"><path class="as15v3bwn"/><path class="qrc405bkt"/></g>`,
		"fallback": "devicon:go-wordmark",
	});
}

export default Component;
