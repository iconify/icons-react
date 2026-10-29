import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f31j-cpil.css';
import '../../css/e/ezpi6nz5c.css';
import '../../css/y/y7ke0gjgt.css';
import '../../css/r/rjg00-qxz.css';
import '../../css/w/w6jkbobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f31j-cpil wm-k"/><path class="ezpi6nz5c wm-k"/><path class="wm-k y7ke0gjgt"/><path class="rjg00-qxz wm-shine"/><path class="w6jkbobhf wm-a"/></g>`,
		"fallback": "withicons-anime:baseball",
	});
}

export default Component;
