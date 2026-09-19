import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z2qxq_b6e.css';
import '../../css/n/nwy44fbty.css';
import '../../css/g/gg07ndbtc.css';
import '../../css/i/i_k4cdv3c.css';
import '../../css/j/j7uafdcoz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="z2qxq_b6e"/><path class="nwy44fbty"/><path class="gg07ndbtc"/><path class="i_k4cdv3c"/><path class="j7uafdcoz"/></g>`,
		"fallback": "icon-park:converging-gateway",
	});
}

export default Component;
