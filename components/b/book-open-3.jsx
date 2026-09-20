import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/q/qkps7f46r.css';
import '../../css/a/at1ouflox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="qkps7f46r"/><path class="at1ouflox"/></g>`,
		"fallback": "streamline-cyber:book-open-3",
	});
}

export default Component;
