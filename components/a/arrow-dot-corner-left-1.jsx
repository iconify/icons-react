import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pv4i2gbfo.css';
import '../../css/b/bkw3dobuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pv4i2gbfo"/><path class="bkw3dobuk"/></g>`,
		"fallback": "streamline-ultimate-color:arrow-dot-corner-left-1",
	});
}

export default Component;
