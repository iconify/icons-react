import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egh6ln5ip.css';
import '../../css/c/c8fb32bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="egh6ln5ip"/><path clip-rule="evenodd" class="c8fb32bsr"/></g>`,
		"fallback": "streamline-sharp-color:insert-top-left-flat",
	});
}

export default Component;
