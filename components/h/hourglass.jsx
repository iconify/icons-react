import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/n/nj_0r4jvq.css';
import '../../css/l/lyzquwbia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="nj_0r4jvq"/><path class="lyzquwbia"/></g>`,
		"fallback": "streamline-sharp-color:hourglass",
	});
}

export default Component;
