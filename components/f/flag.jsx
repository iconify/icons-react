import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ag7llacrj.css';
import '../../css/o/o80sgkb4p.css';
import '../../css/g/gw4m0pbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ag7llacrj"/><path class="o80sgkb4p"/><path class="gw4m0pbbr"/></g>`,
		"fallback": "streamline-ultimate-color:flag",
	});
}

export default Component;
