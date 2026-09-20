import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bnemlnb0q.css';
import '../../css/g/g9gg9li_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="bnemlnb0q"/><path class="g9gg9li_w"/></g>`,
		"fallback": "streamline-cyber:bomb",
	});
}

export default Component;
