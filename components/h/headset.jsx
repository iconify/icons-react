import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/acgnrobcy.css';
import '../../css/x/x15bctgju.css';
import '../../css/z/zswyk9z4j.css';
import '../../css/h/hjt1n9b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="acgnrobcy"/><path class="x15bctgju"/><path class="zswyk9z4j"/><path class="hjt1n9b2f"/></g>`,
		"fallback": "iconaut:headset",
	});
}

export default Component;
