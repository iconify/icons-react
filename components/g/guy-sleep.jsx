import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv_xycegq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv_xycegq"/>`,
		"fallback": "ps:guy-sleep",
	});
}

export default Component;
