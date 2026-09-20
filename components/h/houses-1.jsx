import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocos3pbek.css';
import '../../css/q/qeed53eod.css';
import '../../css/f/f-ki0cbls.css';
import '../../css/m/moyuhzd7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ocos3pbek"/><path class="qeed53eod"/><path class="f-ki0cbls"/><path class="moyuhzd7x"/></g>`,
		"fallback": "tdesign:houses-1",
	});
}

export default Component;
