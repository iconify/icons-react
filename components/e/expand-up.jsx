import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f68_n4bcj.css';
import '../../css/v/vu94nfe8u.css';
import '../../css/a/ah6g-fbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f68_n4bcj"/><path class="vu94nfe8u"/><path class="ah6g-fbhn"/></g>`,
		"fallback": "tdesign:expand-up",
	});
}

export default Component;
