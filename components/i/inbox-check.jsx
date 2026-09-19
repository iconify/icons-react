import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hxo2p_vlt.css';
import '../../css/x/xknbt5ism.css';
import '../../css/a/ak7meacck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hxo2p_vlt"/><path class="xknbt5ism"/><path class="ak7meacck"/></g>`,
		"fallback": "hugeicons:inbox-check",
	});
}

export default Component;
