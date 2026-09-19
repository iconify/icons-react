import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df57ckmtv.css';
import '../../css/d/df24pzbxt.css';
import '../../css/c/co_gutb3f.css';
import '../../css/m/mamssyaqq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df57ckmtv"/><path class="df24pzbxt"/><path class="co_gutb3f"/><path class="mamssyaqq"/>`,
		"fallback": "fxemoji:hourglass",
	});
}

export default Component;
