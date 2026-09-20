import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp79mfbbx.css';
import '../../css/l/lcqrf1bec.css';
import '../../css/s/sr4sabbve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp79mfbbx"/><path class="lcqrf1bec"/><path class="sr4sabbve"/>`,
		"fallback": "selfhst:calico-light",
	});
}

export default Component;
