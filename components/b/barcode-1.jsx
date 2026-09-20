import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q68w_ab7t.css';
import '../../css/q/qf2lu78as.css';
import '../../css/r/rm-3m8roz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q68w_ab7t"/><path class="qf2lu78as"/><path class="rm-3m8roz"/></g>`,
		"fallback": "streamline-cyber-color:barcode-1",
	});
}

export default Component;
