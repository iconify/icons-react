import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/a3h5v9byo.css';
import '../../css/n/n9h_n5b2p.css';
import '../../css/s/svv3xwbfg.css';
import '../../css/t/tw___5ryy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="a3h5v9byo"/><path clip-rule="evenodd" class="n9h_n5b2p"/><path class="svv3xwbfg"/><path class="tw___5ryy"/></g>`,
		"fallback": "streamline-sharp-color:double-heart",
	});
}

export default Component;
