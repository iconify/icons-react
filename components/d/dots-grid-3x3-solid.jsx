import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/jygyqc4qd.css';
import '../../css/y/ys9zrsb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path clip-rule="evenodd" class="jygyqc4qd"/><path class="ys9zrsb-a"/></g>`,
		"fallback": "iconoir:dots-grid-3x3-solid",
	});
}

export default Component;
