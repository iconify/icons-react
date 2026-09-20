import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/b8c8xdkvm.css';
import '../../css/f/fwz5zxzmb.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="b8c8xdkvm"/><path class="fwz5zxzmb"/></g>`,
		"fallback": "marketeq:cargo-ship-2",
	});
}

export default Component;
