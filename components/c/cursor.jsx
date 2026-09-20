import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fdx37ncbs.css';
import '../../css/y/yx8thtqru.css';
import '../../css/y/yn-wi695j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fdx37ncbs"/><path class="yx8thtqru"/><path class="yn-wi695j"/></g>`,
		"fallback": "streamline-ultimate-color:cursor",
	});
}

export default Component;
