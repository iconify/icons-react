import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bporwpv9i.css';
import '../../css/u/ujw8tpbuy.css';
import '../../css/c/cbby56vwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bporwpv9i"/><path class="ujw8tpbuy"/><path class="cbby56vwn"/></g>`,
		"fallback": "proicons:clipboard-paste",
	});
}

export default Component;
