import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wihsh4bdf.css';
import '../../css/h/hf65snbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wihsh4bdf"/><path class="hf65snbat"/></g>`,
		"fallback": "andrsrxn:chair-rocking",
	});
}

export default Component;
