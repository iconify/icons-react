import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en701kbcf.css';
import '../../css/b/bsy36b7su.css';
import '../../css/l/ln68z2bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="en701kbcf"/><circle class="bsy36b7su"/><path class="ln68z2bzx"/></g>`,
		"fallback": "humbleicons:cart",
	});
}

export default Component;
