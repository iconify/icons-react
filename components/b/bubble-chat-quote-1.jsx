import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gt0t_gfvc.css';
import '../../css/c/cqkh3g-7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="gt0t_gfvc"/><path class="cqkh3g-7w"/></g>`,
		"fallback": "streamline-cyber:bubble-chat-quote-1",
	});
}

export default Component;
