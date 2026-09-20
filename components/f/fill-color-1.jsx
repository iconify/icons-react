import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7s2ixb0x.css';
import '../../css/t/tck02ab5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7s2ixb0x"/><path class="tck02ab5g"/></g>`,
		"fallback": "tdesign:fill-color-1",
	});
}

export default Component;
