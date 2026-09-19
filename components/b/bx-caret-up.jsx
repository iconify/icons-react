import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhcl_vheq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhcl_vheq"/>`,
		"fallback": "bx:bx-caret-up",
	});
}

export default Component;
