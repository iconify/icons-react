import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/p1ghqlb6z.css';
import '../../css/x/xrviejbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="p1ghqlb6z"/><path class="xrviejbni"/></g>`,
		"fallback": "streamline-cyber:computer-chips-32-bit",
	});
}

export default Component;
