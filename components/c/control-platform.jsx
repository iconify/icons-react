import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-zq81bfa.css';
import '../../css/o/o9dm8cc-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-zq81bfa"/><path class="o9dm8cc-v"/></g>`,
		"fallback": "tdesign:control-platform",
	});
}

export default Component;
