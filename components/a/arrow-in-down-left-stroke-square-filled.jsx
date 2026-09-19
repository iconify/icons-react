import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_pgce4lp.css';
import '../../css/p/pn-6xpb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_pgce4lp"/><path class="pn-6xpb6t"/>`,
		"fallback": "boxicons:arrow-in-down-left-stroke-square-filled",
	});
}

export default Component;
