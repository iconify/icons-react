import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0n0hlb9v.css';
import '../../css/d/dxxvsabsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c0n0hlb9v"/><path class="dxxvsabsg"/></g>`,
		"fallback": "streamline-plump-color:hierarchy-15-flat",
	});
}

export default Component;
