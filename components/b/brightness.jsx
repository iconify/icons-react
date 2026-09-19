import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxmby0bbg.css';
import '../../css/b/bxhkq1b-t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxmby0bbg"/><path class="bxhkq1b-t"/>`,
		"fallback": "cil:brightness",
	});
}

export default Component;
