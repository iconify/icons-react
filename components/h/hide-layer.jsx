import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/t7dcslbnl.css';
import '../../css/w/wjrrn-bha.css';
import '../../css/s/s-ar71bvn.css';
import '../../css/d/de1ktybrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="t7dcslbnl"/><path class="wjrrn-bha"/><path class="s-ar71bvn"/><path class="de1ktybrz"/></g>`,
		"fallback": "streamline-sharp-color:hide-layer",
	});
}

export default Component;
