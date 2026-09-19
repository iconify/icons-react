import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/inufcabaq.css';
import '../../css/b/bopi9b9jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="inufcabaq"/><circle class="bopi9b9jn"/></g>`,
		"fallback": "hugeicons:beach-02",
	});
}

export default Component;
