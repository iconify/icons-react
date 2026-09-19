import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jr7vbsb8z.css';
import '../../css/c/cgdrp4m5c.css';
import '../../css/o/o45vqq0ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jr7vbsb8z"/><path class="cgdrp4m5c"/><path class="o45vqq0ds"/></g>`,
		"fallback": "hugeicons:activity-02",
	});
}

export default Component;
