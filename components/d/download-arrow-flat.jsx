import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dsx5_hbes.css';
import '../../css/v/vvihrw5ix.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dsx5_hbes"/><path class="vvihrw5ix"/></g>`,
		"fallback": "streamline-flex-color:download-arrow-flat",
	});
}

export default Component;
