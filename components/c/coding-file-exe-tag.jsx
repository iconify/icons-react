import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nrzhdwbpp.css';
import '../../css/d/dk5kzs9xf.css';
import '../../css/c/c04zuphpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nrzhdwbpp"/><path clip-rule="evenodd" class="dk5kzs9xf"/><path class="c04zuphpu"/></g>`,
		"fallback": "streamline-freehand-color:coding-file-exe-tag",
	});
}

export default Component;
