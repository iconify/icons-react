import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wak7u4bkm.css';
import '../../css/u/uybk_4bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wak7u4bkm"/><path class="uybk_4bpk"/>`,
		"fallback": "mingcute:figma-line",
	});
}

export default Component;
