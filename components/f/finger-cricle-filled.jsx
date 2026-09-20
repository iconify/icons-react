import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qop02jb7d.css';
import '../../css/a/ampch4b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qop02jb7d"/><path class="ampch4b7v"/></g>`,
		"fallback": "reicon:finger-cricle-filled",
	});
}

export default Component;
