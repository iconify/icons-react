import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj4ru8bao.css';
import '../../css/y/ym_rscbus.css';
import '../../css/t/tdve8jvut.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vj4ru8bao"/><path clip-rule="evenodd" class="ym_rscbus"/><path class="tdve8jvut"/></g>`,
		"fallback": "streamline-color:download-computer-flat",
	});
}

export default Component;
