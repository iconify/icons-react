import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jzm8pgb2f.css';
import '../../css/n/njepc3bhy.css';
import '../../css/f/ftmzeob4g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jzm8pgb2f"/><path class="njepc3bhy"/><path class="ftmzeob4g"/></g>`,
		"fallback": "streamline-color:decent-work-and-economic-growth-flat",
	});
}

export default Component;
