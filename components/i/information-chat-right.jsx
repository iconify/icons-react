import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/x4l2r92ma.css';
import '../../css/w/wmmfz3bcb.css';
import '../../css/a/arcgi7ubs.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="x4l2r92ma"/><path class="wmmfz3bcb"/><path class="arcgi7ubs"/></g>`,
		"fallback": "marketeq:information-chat-right",
	});
}

export default Component;
