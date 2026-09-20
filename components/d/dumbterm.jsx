import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl0fpxpgn.css';
import '../../css/w/wci5zzb5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="wl0fpxpgn"/><path class="wci5zzb5n"/>`,
		"fallback": "selfhst:dumbterm",
	});
}

export default Component;
