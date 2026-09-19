import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oia2jebxk.css';
import '../../css/e/emuklcgdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="oia2jebxk"/><path class="emuklcgdw"/>`,
		"fallback": "boxicons:gallery-horizontal-filled",
	});
}

export default Component;
