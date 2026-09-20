import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/f9dl4cp1x.css';
import '../../css/o/o0x85ub0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="f9dl4cp1x"/><path class="o0x85ub0y"/></g>`,
		"fallback": "streamline-cyber:cat-2",
	});
}

export default Component;
