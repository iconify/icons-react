import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozm3mtb-w.css';
import '../../css/b/bdarodbdm.css';
import '../../css/h/hhl2ebb5m.css';
import '../../css/y/ywu-u159q.css';
import '../../css/f/fuv5wx26n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozm3mtb-w"/><path class="bdarodbdm"/><path class="hhl2ebb5m"/><path class="ywu-u159q"/><path class="fuv5wx26n"/>`,
		"fallback": "fxemoji:envelopedownarrowabove",
	});
}

export default Component;
