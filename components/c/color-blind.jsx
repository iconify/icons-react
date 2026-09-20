import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ak8kneg9y.css';
import '../../css/y/yepekh46m.css';
import '../../css/n/nnlo_903k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ak8kneg9y"/><path class="yepekh46m"/><path class="nnlo_903k"/></g>`,
		"fallback": "streamline-ultimate:color-blind",
	});
}

export default Component;
