import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/whciqfy6m.css';
import '../../css/o/oi5j6dvln.css';
import '../../css/d/dn-0z_l-l.css';
import '../../css/v/vsx8-3bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="whciqfy6m"/><path class="oi5j6dvln"/><path class="dn-0z_l-l"/><path class="vsx8-3bwe"/></g>`,
		"fallback": "streamline-cyber:book-encyclopedia-1",
	});
}

export default Component;
