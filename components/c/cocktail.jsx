import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kohy_6vdk.css';
import '../../css/j/j0kcqnbgn.css';
import '../../css/u/umgy3rwzm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kohy_6vdk"/><path class="j0kcqnbgn"/><path class="umgy3rwzm"/></g>`,
		"fallback": "streamline-color:cocktail",
	});
}

export default Component;
