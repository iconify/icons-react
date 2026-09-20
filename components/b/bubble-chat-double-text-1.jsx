import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/nkqgo_cqg.css';
import '../../css/z/zl_2tybzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="nkqgo_cqg"/><path class="zl_2tybzz"/></g>`,
		"fallback": "streamline-cyber:bubble-chat-double-text-1",
	});
}

export default Component;
