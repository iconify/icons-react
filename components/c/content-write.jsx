import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc_n5ab0n.css';
import '../../css/s/sjdbitpfe.css';
import '../../css/p/pz2pvccnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rc_n5ab0n"/><path class="sjdbitpfe"/><path class="pz2pvccnr"/></g>`,
		"fallback": "streamline-freehand-color:content-write",
	});
}

export default Component;
