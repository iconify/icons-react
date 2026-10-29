import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fc3kbgmfl.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/a/ahz5bx2fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fc3kbgmfl"/><path class="qr4ochb5c wm-s"/><path class="ahz5bx2fp"/></g>`,
		"fallback": "withicons:bluetooth-off-duo",
	});
}

export default Component;
