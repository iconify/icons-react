import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxqac0bmw.css';
import '../../css/j/j2ghpnx_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxqac0bmw"/><circle class="j2ghpnx_h"/>`,
		"fallback": "bx:bx-atom",
	});
}

export default Component;
