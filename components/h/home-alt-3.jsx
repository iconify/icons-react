import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br-uotb6n.css';
import '../../css/l/lw6k7rbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br-uotb6n"/><path class="lw6k7rbph"/>`,
		"fallback": "boxicons:home-alt-3",
	});
}

export default Component;
