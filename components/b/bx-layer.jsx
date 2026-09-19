import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-jo3d9_a.css';
import '../../css/f/f7bx2zbyl.css';
import '../../css/w/wlr77q6kn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-jo3d9_a"/><path class="f7bx2zbyl"/><path class="wlr77q6kn"/>`,
		"fallback": "bx:bx-layer",
	});
}

export default Component;
