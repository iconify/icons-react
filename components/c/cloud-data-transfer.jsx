import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bghzjkbqx.css';
import '../../css/b/btyszxb-c.css';
import '../../css/s/sb-ui4b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bghzjkbqx"/><path class="btyszxb-c"/><path class="sb-ui4b5r"/></g>`,
		"fallback": "streamline-sharp-color:cloud-data-transfer",
	});
}

export default Component;
