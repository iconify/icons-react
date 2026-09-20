import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lh0nbxbbj.css';
import '../../css/o/oj782tibt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lh0nbxbbj"/><path clip-rule="evenodd" class="oj782tibt"/></g>`,
		"fallback": "streamline-sharp-color:computer-chip-1-flat",
	});
}

export default Component;
