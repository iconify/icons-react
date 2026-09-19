import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5w600x0k.css';
import '../../css/w/wz8ezaczc.css';
import '../../css/k/kvpzeiuru.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a5w600x0k"/><circle class="wz8ezaczc"/><circle class="kvpzeiuru"/>`,
		"fallback": "famicons:ellipsis-horizontal-outline",
	});
}

export default Component;
