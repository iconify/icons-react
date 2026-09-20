import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwdw_tqch.css';
import '../../css/v/v9vez9frr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jwdw_tqch"/><path class="v9vez9frr"/></g>`,
		"fallback": "majesticons:align-vertical-center",
	});
}

export default Component;
