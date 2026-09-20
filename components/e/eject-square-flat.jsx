import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mszq7jb9m.css';
import '../../css/s/scn0e15ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mszq7jb9m"/><path clip-rule="evenodd" class="scn0e15ut"/></g>`,
		"fallback": "streamline-sharp-color:eject-square-flat",
	});
}

export default Component;
