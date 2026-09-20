import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gza2rb70b.css';
import '../../css/h/h7y3db64d.css';
import '../../css/x/xgwypdh-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gza2rb70b"/><path class="h7y3db64d"/><path class="xgwypdh-w"/></g>`,
		"fallback": "reicon:cart-add-duotone",
	});
}

export default Component;
