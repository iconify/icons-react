import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/s/s7_gevbze.css';
import '../../css/n/no4wsvg0e.css';
import '../../css/i/inu8xzecx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path class="s7_gevbze"/><path class="no4wsvg0e"/><path class="inu8xzecx"/></g>`,
		"fallback": "tdesign:compass",
	});
}

export default Component;
