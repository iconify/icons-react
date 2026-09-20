import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/csmm2dumj.css';
import '../../css/u/udmds6x2x.css';
import '../../css/f/f_9rycbum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="csmm2dumj"/><path class="udmds6x2x"/><path class="f_9rycbum"/></g>`,
		"fallback": "streamline-cyber-color:cloud-transfer-half",
	});
}

export default Component;
