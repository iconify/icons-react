import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1_u81bnd.css';
import '../../css/u/u8hb6sbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b s1_u81bnd"/><path class="b u8hb6sbwc"/>`,
		"fallback": "boxicons:bowl-bubbles-filled",
	});
}

export default Component;
