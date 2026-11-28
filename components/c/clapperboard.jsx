import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gxeo900vz.css';
import '../../css/x/xmonvmbep.css';
import '../../css/p/p543wbb6j.css';
import '../../css/w/w5qtwlbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gxeo900vz"/><path class="xmonvmbep"/><path class="p543wbb6j"/><path class="w5qtwlbze"/></g>`,
		"fallback": "iconaut:clapperboard",
	});
}

export default Component;
