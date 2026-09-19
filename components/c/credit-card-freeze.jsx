import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/sj5uzfbyn.css';
import '../../css/m/mqtixbwqo.css';
import '../../css/i/ijzyzjblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="sj5uzfbyn"/><path class="mqtixbwqo"/><path class="ijzyzjblm"/></g>`,
		"fallback": "hugeicons:credit-card-freeze",
	});
}

export default Component;
