import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr-hoeb6g.css';
import '../../css/u/u8hb6sbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b zr-hoeb6g"/><path class="b u8hb6sbwc"/>`,
		"fallback": "boxicons:bowl-bubbles",
	});
}

export default Component;
