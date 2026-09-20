import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/h/hbim2bbas.css';
import '../../css/b/bz0lhpcxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="hbim2bbas"/><path class="bz0lhpcxr"/></g>`,
		"fallback": "streamline-cyber:cursor-arrow-double",
	});
}

export default Component;
