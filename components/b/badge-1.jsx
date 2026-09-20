import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bfa1p4bhy.css';
import '../../css/g/gwh11sb9x.css';
import '../../css/t/t6p2dab5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="bfa1p4bhy"/><path class="gwh11sb9x"/><path class="t6p2dab5s"/></g>`,
		"fallback": "streamline-cyber:badge-1",
	});
}

export default Component;
