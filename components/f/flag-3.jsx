import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/za99sbb6s.css';
import '../../css/e/e7s7i2bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="za99sbb6s"/><path class="e7s7i2bkd"/></g>`,
		"fallback": "tdesign:flag-3",
	});
}

export default Component;
