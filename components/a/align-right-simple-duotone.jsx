import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0vi6uguc.css';
import '../../css/l/l9jmerwwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t0vi6uguc"/><path class="l9jmerwwx"/></g>`,
		"fallback": "si:align-right-simple-duotone",
	});
}

export default Component;
