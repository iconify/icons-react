import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhtd2p4aa.css';
import '../../css/f/flgomrbzx.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhtd2p4aa"/><path class="flgomrbzx"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:credit-card-check-20",
	});
}

export default Component;
