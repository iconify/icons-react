import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvkrd2b5g.css';
import '../../css/f/f1pe3pbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvkrd2b5g"/><path clip-rule="evenodd" class="f1pe3pbmj"/></g>`,
		"fallback": "streamline-sharp-color:feather-pen-flat",
	});
}

export default Component;
