import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/y1ao49biz.css';
import '../../css/x/xxujgqzbg.css';
import '../../css/p/pyx8jgb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="y1ao49biz"/><path class="xxujgqzbg"/><path class="pyx8jgb6o"/></g>`,
		"fallback": "streamline-cyber:filter-1",
	});
}

export default Component;
