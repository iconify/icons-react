import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ucxrrm7vu.css';
import '../../css/i/iyvxh6bma.css';
import '../../css/e/epb3e3v_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ucxrrm7vu"/><path class="iyvxh6bma"/><path class="epb3e3v_u"/></g>`,
		"fallback": "hugeicons:burj-al-arab",
	});
}

export default Component;
