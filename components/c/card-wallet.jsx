import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/grv-2_02w.css';
import '../../css/t/trdt80b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="grv-2_02w"/><path class="trdt80b2a"/></g>`,
		"fallback": "iconoir:card-wallet",
	});
}

export default Component;
