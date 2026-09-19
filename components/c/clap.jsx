import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvwqk-blo.css';
import '../../css/a/a3vv8kymh.css';
import '../../css/g/g5s83bb7v.css';
import '../../css/f/flsl0ybgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvwqk-blo"/><path class="a3vv8kymh"/><path class="g5s83bb7v"/><path class="flsl0ybgw"/>`,
		"fallback": "fxemoji:clap",
	});
}

export default Component;
