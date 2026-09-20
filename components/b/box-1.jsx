import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/u5w688b7l.css';
import '../../css/x/x082-8cvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="u5w688b7l"/><path class="x082-8cvm"/></g>`,
		"fallback": "streamline-cyber:box-1",
	});
}

export default Component;
