import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/frwu2ybns.css';
import '../../css/n/nowfm5boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="frwu2ybns"/><path class="nowfm5boy"/></g>`,
		"fallback": "streamline-cyber:dog-1",
	});
}

export default Component;
