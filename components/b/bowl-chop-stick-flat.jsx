import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3lssmonf.css';
import '../../css/l/l3l_kbinv.css';
import '../../css/y/yi1p79b1s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a3lssmonf"/><path clip-rule="evenodd" class="l3l_kbinv"/><path clip-rule="evenodd" class="yi1p79b1s"/></g>`,
		"fallback": "streamline-plump-color:bowl-chop-stick-flat",
	});
}

export default Component;
