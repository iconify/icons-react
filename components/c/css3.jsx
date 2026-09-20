import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uc395w8uz.css';
import '../../css/x/xkbhbyrio.css';
import '../../css/o/oqb8-utyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uc395w8uz"/><path class="xkbhbyrio"/><path class="oqb8-utyi"/></g>`,
		"fallback": "tdesign:css3",
	});
}

export default Component;
