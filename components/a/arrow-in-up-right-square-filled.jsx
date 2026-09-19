import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8hod8bsp.css';
import '../../css/z/z9mo31emm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8hod8bsp"/><path class="z9mo31emm"/>`,
		"fallback": "boxicons:arrow-in-up-right-square-filled",
	});
}

export default Component;
