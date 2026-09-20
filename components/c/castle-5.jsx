import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht3awmbjv.css';
import '../../css/q/qk2k3fbxw.css';
import '../../css/y/yi4d1dclt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht3awmbjv"/><path class="qk2k3fbxw"/><path class="yi4d1dclt"/></g>`,
		"fallback": "tdesign:castle-5",
	});
}

export default Component;
