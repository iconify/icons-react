import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1xr4eb-l.css';
import '../../css/z/zl3vbi-0a.css';
import '../../css/z/z1i8lj68h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1xr4eb-l"/><path class="zl3vbi-0a"/><path class="z1i8lj68h"/></g>`,
		"fallback": "streamline-ultimate-color:cell-border-frame",
	});
}

export default Component;
