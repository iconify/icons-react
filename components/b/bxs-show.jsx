import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vza3v5bem.css';
import '../../css/c/cxpp0lxyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vza3v5bem"/><path class="cxpp0lxyr"/>`,
		"fallback": "bx:bxs-show",
	});
}

export default Component;
