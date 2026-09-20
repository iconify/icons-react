import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gzja4ubot.css';
import '../../css/w/wn_mj8mkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gzja4ubot"/><path class="wn_mj8mkw"/></g>`,
		"fallback": "tdesign:dam-5",
	});
}

export default Component;
