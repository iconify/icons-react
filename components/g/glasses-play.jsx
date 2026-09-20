import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xywp-lbdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xywp-lbdg"/>`,
		"fallback": "ix:glasses-play",
	});
}

export default Component;
