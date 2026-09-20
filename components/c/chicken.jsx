import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/og6oc-gyn.css';
import '../../css/y/y1b1fibbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="og6oc-gyn"/><path class="y1b1fibbo"/></g>`,
		"fallback": "tdesign:chicken",
	});
}

export default Component;
