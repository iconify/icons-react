import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sucysfikq.css';
import '../../css/r/rifcqzbni.css';
import '../../css/n/nigjfvbya.css';
import '../../css/i/ibgenzjqo.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sucysfikq"/><path class="rifcqzbni"/><path class="nigjfvbya"/><path class="ibgenzjqo"/>`,
		"fallback": "medical-icon:i-gift-shop",
	});
}

export default Component;
