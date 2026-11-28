import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd8-j02fc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xigu7d-fq.css';
import '../../css/d/dg8dgkb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd8-j02fc secondary"/><g class="dt0cm9dhy primary"><path class="xigu7d-fq"/><path class="dg8dgkb8z"/></g>`,
		"fallback": "iconaut:bold-duo",
	});
}

export default Component;
