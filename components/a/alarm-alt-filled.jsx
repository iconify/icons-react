import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrsrqfkrg.css';
import '../../css/l/lw_rdhb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrsrqfkrg"/><path class="lw_rdhb3x"/>`,
		"fallback": "boxicons:alarm-alt-filled",
	});
}

export default Component;
