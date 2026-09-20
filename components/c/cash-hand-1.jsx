import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/n6q4nt5ox.css';
import '../../css/w/wc8nrozqf.css';
import '../../css/m/m5ljtkbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="n6q4nt5ox"/><path class="wc8nrozqf"/><path class="m5ljtkbic"/></g>`,
		"fallback": "streamline-cyber:cash-hand-1",
	});
}

export default Component;
